'use client';

import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Home,
  LogOut,
  Mail,
  Plus,
  Search,
  Send,
  Trash2,
  Users,
  Clock,
  CheckCircle,
  Loader2,
  X,
  FileText,
  TrendingUp
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Types
interface Subscriber {
  id: number;
  email: string;
  status: string;
  subscribedAt: string;
}

interface Campaign {
  id: number;
  subject: string;
  content: string;
  recipientCount: number;
  sentAt: string;
}

interface Stats {
  totalSubscribers: number;
  activeSubscribers: number;
  totalCampaigns: number;
  recentGrowth: number;
}

// Tab type
type TabType = 'compose' | 'subscribers' | 'campaigns';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // State
  const [activeTab, setActiveTab] = useState<TabType>('compose');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalSubscribers: 0,
    activeSubscribers: 0,
    totalCampaigns: 0,
    recentGrowth: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Campaign form state
  const [campaignSubject, setCampaignSubject] = useState('');
  const [campaignContent, setCampaignContent] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  // Add subscriber modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
  const [isAddingSubscriber, setIsAddingSubscriber] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  // Fetch data
  useEffect(() => {
    if (status === 'authenticated') {
      fetchData();
    }
  }, [status]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [subsRes, campsRes] = await Promise.all([
        fetch('/api/subscribers'),
        fetch('/api/campaigns'),
      ]);

      if (subsRes.ok) {
        const subsData = await subsRes.json();
        setSubscribers(subsData.subscribers || []);
        setStats(prev => ({
          ...prev,
          totalSubscribers: subsData.total || 0,
          activeSubscribers: subsData.active || 0,
        }));
      }

      if (campsRes.ok) {
        const campsData = await campsRes.json();
        setCampaigns(campsData.campaigns || []);
        setStats(prev => ({
          ...prev,
          totalCampaigns: campsData.total || 0,
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaignSubject || !campaignContent) return;

    setIsSending(true);
    try {
      const res = await fetch('/api/campaigns/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: campaignSubject,
          content: campaignContent,
        }),
      });

      if (res.ok) {
        setSendSuccess(true);
        setCampaignSubject('');
        setCampaignContent('');
        fetchData();
        setTimeout(() => setSendSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error sending campaign:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleAddSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubscriberEmail) return;

    setIsAddingSubscriber(true);
    try {
      const res = await fetch('/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newSubscriberEmail }),
      });

      if (res.ok) {
        setNewSubscriberEmail('');
        setShowAddModal(false);
        fetchData();
      }
    } catch (error) {
      console.error('Error adding subscriber:', error);
    } finally {
      setIsAddingSubscriber(false);
    }
  };

  const handleDeleteSubscriber = async (id: number) => {
    if (!confirm('Are you sure you want to remove this subscriber?')) return;

    try {
      const res = await fetch(`/api/subscribers/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/imgs/FLN logo-full color.png"
                  alt="FLN"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-navy">Admin Dashboard</h1>
                <p className="text-xs text-slate-500">Manage subscribers & campaigns</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">
                Welcome, <strong>{session?.user?.name}</strong>
              </span>
              <Button
                as={Link}
                href="/"
                size="sm"
                variant="bordered"
                className="text-slate-600 border-slate-300"
                startContent={<Home className="w-4 h-4" />}
              >
                View Site
              </Button>
              <Button
                size="sm"
                color="danger"
                variant="flat"
                onClick={() => signOut({ callbackUrl: '/admin/login' })}
                startContent={<LogOut className="w-4 h-4" />}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Subscribers</p>
                <p className="text-2xl font-bold text-navy">{stats.totalSubscribers}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium">{stats.activeSubscribers} active</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Campaigns Sent</p>
                <p className="text-2xl font-bold text-navy">{stats.totalCampaigns}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-sm text-slate-500">
              Total email campaigns
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Engagement</p>
                <p className="text-2xl font-bold text-navy">94.2%</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-sm text-slate-500">
              Average open rate
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="border-b">
            <nav className="flex">
              {[
                { id: 'compose', label: 'Compose Email', icon: Send },
                { id: 'subscribers', label: 'Subscribers', icon: Users },
                { id: 'campaigns', label: 'Campaign History', icon: Clock },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple text-purple'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Compose Tab */}
            {activeTab === 'compose' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="max-w-2xl">
                  <h3 className="text-lg font-bold text-navy mb-2">Send Email Campaign</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Compose and send an email to all {stats.activeSubscribers} active subscribers
                  </p>

                  {sendSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 bg-green-50 rounded-2xl border-2 border-green-200"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">Campaign sent successfully!</h3>
                      <p className="text-slate-600 mt-2">Your campaign has been delivered</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSendCampaign} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Subject Line
                        </label>
                        <input
                          type="text"
                          value={campaignSubject}
                          onChange={(e) => setCampaignSubject(e.target.value)}
                          required
                          placeholder="Enter email subject..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Email Content
                        </label>
                        <textarea
                          value={campaignContent}
                          onChange={(e) => setCampaignContent(e.target.value)}
                          required
                          rows={8}
                          placeholder="Write your email message here..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-navy text-white font-bold h-12 rounded-xl hover:bg-purple transition-colors"
                        startContent={isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      >
                        {isSending ? 'Sending...' : `Send to ${stats.activeSubscribers} Subscribers`}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}

            {/* Subscribers Tab */}
            {activeTab === 'subscribers' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy">Subscriber List</h3>
                    <p className="text-sm text-slate-500">Manage your email subscribers</p>
                  </div>
                  <Button
                    onClick={() => setShowAddModal(true)}
                    className="bg-purple text-white font-medium"
                    startContent={<Plus className="w-4 h-4" />}
                  >
                    Add Subscriber
                  </Button>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subscribers..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  />
                </div>

                {/* Subscriber List */}
                {filteredSubscribers.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-navy">No subscribers yet</h3>
                    <p className="text-slate-500">Subscribers will appear here once they sign up</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredSubscribers.map((subscriber) => (
                      <div
                        key={subscriber.id}
                        className="flex items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-navy">{subscriber.email}</p>
                          <p className="text-sm text-slate-500">
                            Subscribed {new Date(subscriber.subscribedAt).toLocaleDateString()}
                            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                              subscriber.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {subscriber.status}
                            </span>
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteSubscriber(subscriber.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-lg font-bold text-navy mb-2">Campaign History</h3>
                <p className="text-sm text-slate-500 mb-6">View all sent email campaigns</p>

                {campaigns.length === 0 ? (
                  <div className="text-center py-12">
                    <Mail className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-navy">No campaigns sent yet</h3>
                    <p className="text-slate-500">Your email campaigns will appear here after sending</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {campaigns.map((campaign) => (
                      <div
                        key={campaign.id}
                        className="border rounded-xl p-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-purple" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-navy">{campaign.subject}</h4>
                            <p className="text-sm text-slate-600 line-clamp-2 mt-1">
                              {campaign.content.substring(0, 150)}...
                            </p>
                            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                              <span>Sent to {campaign.recipientCount} subscribers</span>
                              <span>•</span>
                              <span>{new Date(campaign.sentAt).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Add Subscriber Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy">Add New Subscriber</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleAddSubscriber} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newSubscriberEmail}
                    onChange={(e) => setNewSubscriberEmail(e.target.value)}
                    required
                    placeholder="subscriber@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="bordered"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isAddingSubscriber}
                    className="flex-1 bg-purple text-white"
                  >
                    {isAddingSubscriber ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Add Subscriber'
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
