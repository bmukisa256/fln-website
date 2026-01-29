<?php
session_start();
require_once '../config/auth.php';
require_once '../includes/functions.php';

// Require admin login
AdminAuth::requireLogin();

$pageTitle = 'Admin Dashboard';

// Get data
$subscriberManager = new SubscriberManager();
$campaignManager = new CampaignManager();

$subscribers = $subscriberManager->getAllSubscribers();
$campaigns = $campaignManager->getAllCampaigns();
$activeSubscribers = $subscriberManager->getActiveSubscribers();
$subscriberCount = $subscriberManager->getSubscriberCount();
$campaignCount = $campaignManager->getCampaignCount();

$csrfToken = generateCSRFToken();
?>

<?php include '../includes/header.php'; ?>

<!-- Header -->
<header class="fixed top-0 left-0 right-0 z-50 border-b bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
                <p class="text-xs text-muted-foreground">Manage subscribers and campaigns</p>
            </div>
            <div class="flex items-center space-x-3">
                <span class="text-xs text-gray-600">
                    Welcome, <strong><?php echo htmlspecialchars($_SESSION['admin_username']); ?></strong>
                </span>
                <a href="logout.php" class="inline-flex items-center px-3 py-1.5 border border-red-300 rounded-md shadow-sm text-xs font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <svg class="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Logout
                </a>
                <a href="../" class="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <svg class="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to Site
                </a>
            </div>
        </div>
    </div>
</header>

<div class="min-h-screen bg-gray-50 pt-20">

    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <!-- Stats -->
        <div class="mb-8 grid gap-4 md:grid-cols-3">
            <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                            </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
                                <dd class="text-lg font-medium text-gray-900"><?php echo $subscriberCount; ?></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                    <div class="text-sm">
                        <span class="font-medium text-green-600">+12%</span>
                        <span class="text-gray-500">from last month</span>
                    </div>
                </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Campaigns Sent</dt>
                                <dd class="text-lg font-medium text-gray-900"><?php echo $campaignCount; ?></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                    <div class="text-sm">
                        <span class="text-gray-500">Total email campaigns</span>
                    </div>
                </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="p-5">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Engagement</dt>
                                <dd class="text-lg font-medium text-gray-900">94.2%</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                    <div class="text-sm">
                        <span class="text-gray-500">Average open rate</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="space-y-4">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <button onclick="showTab('compose')" id="tab-compose" class="tab-button active py-2 px-1 border-b-2 font-medium text-sm border-primary text-primary">
                        Compose Email
                    </button>
                    <button onclick="showTab('subscribers')" id="tab-subscribers" class="tab-button py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                        Subscribers
                    </button>
                    <button onclick="showTab('history')" id="tab-history" class="tab-button py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                        Campaign History
                    </button>
                </nav>
            </div>

            <!-- Compose Email Tab -->
            <div id="compose-content" class="tab-content">
                <div class="bg-white shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-2">Send Email Campaign</h3>
                        <p class="text-sm text-gray-500 mb-6">Compose and send an email to all <?php echo $subscriberCount; ?> active subscribers</p>
                        
                        <form id="campaign-form" class="space-y-6">
                            <!-- Template Selection -->
                            <div>
                                <label for="template" class="block text-sm font-medium text-gray-700">Email Template</label>
                                <select
                                    id="template"
                                    name="template"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary h-12 px-3"
                                    onchange="loadTemplate()"
                                >
                                    <option value="">Select a template (optional)</option>
                                    <option value="newsletter">Newsletter Template</option>
                                    <option value="promotion">Promotional Template</option>
                                </select>
                                <p class="mt-2 text-xs text-gray-500">Choose a template to pre-fill subject and content, or create your own</p>
                            </div>
                            
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700">Subject Line</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary h-12 px-3"
                                    placeholder="Enter email subject..."
                                />
                            </div>

                            <div>
                                <label for="content" class="block text-sm font-medium text-gray-700">Email Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    rows="8"
                                    required
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-3 py-2 resize-none"
                                    placeholder="Write your email message here..."
                                ></textarea>
                            </div>

                            <!-- Subscriber Selection -->
                            <div>
                                <button 
                                    type="button" 
                                    onclick="toggleRecipientsList()" 
                                    class="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 mb-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span>Select Recipients</span>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xs text-gray-500">
                                            <span id="selected-count"><?php echo $subscriberCount; ?></span> of <?php echo $subscriberCount; ?> selected
                                        </span>
                                        <svg id="recipients-chevron" class="w-4 h-4 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>
                                
                                <div id="recipients-list" class="hidden border rounded-lg p-4 bg-gray-50 max-h-64 overflow-y-auto">
                                    <div class="flex items-center justify-between mb-3 pb-2 border-b">
                                        <span class="text-sm font-medium text-gray-700">
                                            Manage recipient selection
                                        </span>
                                        <div class="space-x-2">
                                            <button type="button" onclick="selectAllSubscribers()" class="text-xs text-blue-600 hover:text-blue-800">Select All</button>
                                            <button type="button" onclick="selectNoneSubscribers()" class="text-xs text-gray-600 hover:text-gray-800">Select None</button>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <?php foreach ($activeSubscribers as $subscriber): ?>
                                        <label class="flex items-center p-2 hover:bg-white rounded transition-colors cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                name="selected_subscribers[]" 
                                                value="<?php echo $subscriber['id']; ?>"
                                                checked
                                                onchange="updateSelectedCount()"
                                                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            >
                                            <div class="ml-3 flex-1">
                                                <span class="text-sm text-gray-900"><?php echo htmlspecialchars($subscriber['email']); ?></span>
                                                <span class="ml-2 text-xs text-gray-500">
                                                    (<?php echo date('M j, Y', strtotime($subscriber['subscribed_at'])); ?>)
                                                </span>
                                            </div>
                                        </label>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                                <p class="mt-2 text-xs text-gray-500">Click above to customize which subscribers receive this campaign</p>
                            </div>

                            <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                            
                            <button
                                type="submit"
                                id="send-btn"
                                class="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-12"
                            >
                                <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                </svg>
                                <span id="send-btn-text">Send to <span id="send-count"><?php echo $subscriberCount; ?></span> Subscribers</span>
                            </button>
                        </form>

                        <!-- Progress Display -->
                        <div id="campaign-progress" class="hidden mt-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                            <div class="text-center mb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Sending Campaign...</h3>
                                <p class="text-sm text-gray-600 mt-1">Please wait while we send your email to selected subscribers</p>
                            </div>
                            
                            <!-- Progress Bar -->
                            <div class="mb-4">
                                <div class="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                    <span>Progress</span>
                                    <span id="progress-text">0 of 0 sent</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-3">
                                    <div id="progress-bar" class="bg-blue-500 h-3 rounded-full transition-all duration-300" style="width: 0%"></div>
                                </div>
                            </div>
                            
                            <!-- Current Status -->
                            <div class="text-center">
                                <p class="text-sm text-gray-600">
                                    <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                                    <span id="current-status">Preparing to send...</span>
                                </p>
                            </div>
                            
                            <!-- Progress Log -->
                            <div class="mt-4 max-h-32 overflow-y-auto">
                                <div id="progress-log" class="space-y-1 text-xs text-gray-600">
                                    <!-- Progress messages will appear here -->
                                </div>
                            </div>
                        </div>

                        <!-- Success Message -->
                        <div id="campaign-success" class="hidden mt-6 text-center p-8 bg-green-50 rounded-lg border-2 border-green-200">
                            <div class="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900">Campaign sent successfully!</h3>
                            <p class="mt-2 text-sm text-gray-600" id="success-message">Your campaign has been delivered</p>
                            <div class="mt-4 text-xs text-gray-500" id="success-details">
                                <!-- Detailed stats will appear here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Subscribers Tab -->
            <div id="subscribers-content" class="tab-content hidden">
                <div class="bg-white shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">Subscriber List</h3>
                            <button 
                                onclick="openAddSubscriberModal()" 
                                class="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                                Add Subscriber
                            </button>
                        </div>
                        <p class="text-sm text-gray-500 mb-6">Manage your email subscribers</p>
                        
                        <?php if (empty($subscribers)): ?>
                        <div class="text-center py-12">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                            </svg>
                            <h3 class="mt-2 text-lg font-semibold text-gray-900">No subscribers yet</h3>
                            <p class="mt-1 text-sm text-gray-500">Subscribers will appear here once they sign up</p>
                        </div>
                        <?php else: ?>
                        <div class="space-y-2">
                            <?php foreach ($subscribers as $subscriber): ?>
                            <div class="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div class="flex-1">
                                    <p class="font-medium text-gray-900"><?php echo htmlspecialchars($subscriber['email']); ?></p>
                                    <p class="text-sm text-gray-500">
                                        Subscribed <?php echo date('M j, Y', strtotime($subscriber['subscribed_at'])); ?>
                                        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium <?php echo $subscriber['status'] === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'; ?>">
                                            <?php echo ucfirst($subscriber['status']); ?>
                                        </span>
                                    </p>
                                </div>
                                <button onclick="deleteSubscriber(<?php echo $subscriber['id']; ?>)" class="ml-4 text-red-600 hover:text-red-800">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                    </svg>
                                </button>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Campaign History Tab -->
            <div id="history-content" class="tab-content hidden">
                <div class="bg-white shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-2">Campaign History</h3>
                        <p class="text-sm text-gray-500 mb-6">View all sent email campaigns</p>
                        
                        <?php if (empty($campaigns)): ?>
                        <div class="text-center py-12">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <h3 class="mt-2 text-lg font-semibold text-gray-900">No campaigns sent yet</h3>
                            <p class="mt-1 text-sm text-gray-500">Your email campaigns will appear here after sending</p>
                        </div>
                        <?php else: ?>
                        <div class="space-y-4">
                            <?php 
                            // Sort campaigns by sent_at descending
                            usort($campaigns, function($a, $b) {
                                return strtotime($b['sent_at']) - strtotime($a['sent_at']);
                            });
                            
                            foreach ($campaigns as $campaign): 
                            ?>
                            <div class="border rounded-lg p-4 bg-white">
                                <div class="flex items-start justify-between">
                                    <div class="flex-1">
                                        <h4 class="font-semibold text-gray-900"><?php echo htmlspecialchars($campaign['subject']); ?></h4>
                                        <p class="mt-1 text-sm text-gray-600 line-clamp-2"><?php echo htmlspecialchars(substr($campaign['content'], 0, 150)) . '...'; ?></p>
                                    </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span>Sent to <?php echo $campaign['recipient_count']; ?> subscribers</span>
                                    <span>•</span>
                                    <span><?php echo date('M j, Y g:i A', strtotime($campaign['sent_at'])); ?></span>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- Add Subscriber Modal -->
<div id="add-subscriber-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden z-50">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
            <!-- Modal Header -->
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Add New Subscriber</h3>
                <button onclick="closeAddSubscriberModal()" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <!-- Modal Content -->
            <form id="add-subscriber-form" class="space-y-4">
                <div>
                    <label for="subscriber-email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="subscriber-email" 
                        name="email" 
                        required 
                        class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                        placeholder="subscriber@example.com"
                    >
                </div>
                
                <div>
                    <label for="subscriber-status" class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select 
                        id="subscriber-status" 
                        name="status" 
                        class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                    >
                        <option value="active">Active</option>
                        <option value="unsubscribed">Unsubscribed</option>
                    </select>
                </div>
                
                <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-blue-700">
                                <input type="checkbox" id="send-welcome" name="send_welcome" checked class="mr-2">
                                Send welcome email to new subscriber
                            </p>
                        </div>
                    </div>
                </div>
                
                <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                
                <!-- Modal Actions -->
                <div class="flex items-center justify-end space-x-3 pt-4 border-t">
                    <button 
                        type="button" 
                        onclick="closeAddSubscriberModal()" 
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        id="add-subscriber-btn"
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Subscriber
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
// Email templates data
const emailTemplates = {
    newsletter: {
        subject: 'Weekly Newsletter - <?php echo date("F j, Y"); ?>',
        content: `Dear Subscriber,

Welcome to our weekly newsletter! Here's what's happening this week:

## Featured Article
[Write your main article or announcement here]

## Quick Updates
• Update 1: Brief description
• Update 2: Brief description  
• Update 3: Brief description

## Upcoming Events
📅 Event Name - Date & Time
📅 Event Name - Date & Time

We hope you find this content valuable. Don't forget to follow us on social media!

Best regards,
The Newsletter Team`
    },
    promotion: {
        subject: '🔥 Special Offer Inside - Limited Time!',
        content: `🎉 SPECIAL OFFER JUST FOR YOU! 🎉

We're excited to offer you an exclusive deal that's too good to miss!

## 🏷️ What's the Deal?
[Describe your special offer, discount, or promotion here]

## ⏰ Limited Time Offer
This special pricing is only available until [End Date]. Don't wait - this offer won't last long!

## 🎯 Why Choose Us?
✅ High-quality products/services
✅ Excellent customer support  
✅ Fast delivery/implementation
✅ 100% satisfaction guarantee

Ready to take advantage of this amazing offer?

👆 CLAIM YOUR OFFER NOW 👆

Questions? Reply to this email and we'll get back to you within 24 hours.

Happy shopping!
The Sales Team`
    }
};

// Load template function
function loadTemplate() {
    const templateSelect = document.getElementById('template');
    const subjectInput = document.getElementById('subject');
    const contentTextarea = document.getElementById('content');
    
    const selectedTemplate = templateSelect.value;
    
    if (selectedTemplate && emailTemplates[selectedTemplate]) {
        const template = emailTemplates[selectedTemplate];
        subjectInput.value = template.subject;
        contentTextarea.value = template.content;
    } else {
        // Clear fields if no template selected
        subjectInput.value = '';
        contentTextarea.value = '';
    }
}

// Toggle recipients list visibility
function toggleRecipientsList() {
    const recipientsList = document.getElementById('recipients-list');
    const chevron = document.getElementById('recipients-chevron');
    
    if (recipientsList.classList.contains('hidden')) {
        recipientsList.classList.remove('hidden');
        chevron.classList.add('rotate-180');
    } else {
        recipientsList.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }
}

// Modal functions for adding subscribers
function openAddSubscriberModal() {
    document.getElementById('add-subscriber-modal').classList.remove('hidden');
    document.getElementById('subscriber-email').focus();
}

function closeAddSubscriberModal() {
    document.getElementById('add-subscriber-modal').classList.add('hidden');
    document.getElementById('add-subscriber-form').reset();
}

// Add subscriber form submission
document.getElementById('add-subscriber-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const addBtn = document.getElementById('add-subscriber-btn');
    const originalText = addBtn.innerHTML;
    
    // Show loading state
    addBtn.disabled = true;
    addBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Adding...';
    
    try {
        const formData = new FormData(this);
        
        const response = await fetch('../api/add-subscriber.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast(result.message + (result.welcome_email_sent ? ' Welcome email sent!' : ''), 'success');
            closeAddSubscriberModal();
            
            // Add new subscriber to the list dynamically
            addSubscriberToList(result.subscriber);
            
            // Update counts
            location.reload(); // For simplicity, reload to update all counts
        } else {
            showToast(result.message || 'Failed to add subscriber', 'error');
        }
    } catch (error) {
        showToast('Network error. Please try again.', 'error');
    } finally {
        addBtn.disabled = false;
        addBtn.innerHTML = originalText;
    }
});

// Add subscriber to the list dynamically
function addSubscriberToList(subscriber) {
    const subscribersList = document.querySelector('#subscribers-content .space-y-2');
    const noSubscribersMsg = document.querySelector('#subscribers-content .text-center.py-12');
    
    if (noSubscribersMsg) {
        noSubscribersMsg.remove();
    }
    
    if (!subscribersList) {
        // If no list exists, reload the page to show the new subscriber
        location.reload();
        return;
    }
    
    const subscribeDate = new Date(subscriber.subscribed_at).toLocaleDateString('en-US', { 
        year: 'numeric', month: 'short', day: 'numeric' 
    });
    
    const statusClass = subscriber.status === 'active' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-red-100 text-red-800';
    
    const subscriberElement = document.createElement('div');
    subscriberElement.className = 'flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors';
    subscriberElement.innerHTML = `
        <div class="flex-1">
            <p class="font-medium text-gray-900">${subscriber.email}</p>
            <p class="text-sm text-gray-500">
                Subscribed ${subscribeDate}
                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass}">
                    ${subscriber.status.charAt(0).toUpperCase() + subscriber.status.slice(1)}
                </span>
            </p>
        </div>
        <button onclick="deleteSubscriber(${subscriber.id})" class="ml-4 text-red-600 hover:text-red-800">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
        </button>
    `;
    
    subscribersList.insertBefore(subscriberElement, subscribersList.firstChild);
}

// Subscriber selection functions
function selectAllSubscribers() {
    const checkboxes = document.querySelectorAll('input[name="selected_subscribers[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSelectedCount();
}

function selectNoneSubscribers() {
    const checkboxes = document.querySelectorAll('input[name="selected_subscribers[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSelectedCount();
}

function updateSelectedCount() {
    const checkboxes = document.querySelectorAll('input[name="selected_subscribers[]"]');
    const checkedCount = document.querySelectorAll('input[name="selected_subscribers[]"]:checked').length;
    const totalCount = checkboxes.length;
    
    // Update counter display
    document.getElementById('selected-count').textContent = checkedCount;
    document.getElementById('send-count').textContent = checkedCount;
    
    // Update button state
    const sendBtn = document.getElementById('send-btn');
    if (checkedCount === 0) {
        sendBtn.disabled = true;
        sendBtn.classList.add('opacity-50', 'cursor-not-allowed');
        sendBtn.classList.remove('hover:bg-blue-600');
    } else {
        sendBtn.disabled = false;
        sendBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        sendBtn.classList.add('hover:bg-blue-600');
    }
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active', 'border-primary', 'text-primary');
        button.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Show selected tab content
    document.getElementById(tabName + '-content').classList.remove('hidden');
    
    // Add active class to selected tab
    const activeTab = document.getElementById('tab-' + tabName);
    activeTab.classList.add('active', 'border-primary', 'text-primary');
    activeTab.classList.remove('border-transparent', 'text-gray-500');
}

// Campaign form submission with progress
document.getElementById('campaign-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const sendBtn = document.getElementById('send-btn');
    const successDiv = document.getElementById('campaign-success');
    const formDiv = document.getElementById('campaign-form');
    const progressDiv = document.getElementById('campaign-progress');
    
    // Show progress display
    formDiv.classList.add('hidden');
    progressDiv.classList.remove('hidden');
    
    try {
        const formData = new FormData(this);
        await sendCampaignWithProgress(formData);
        
        // Show success message
        progressDiv.classList.add('hidden');
        successDiv.classList.remove('hidden');
        
        // Reset form after 5 seconds
        setTimeout(() => {
            formDiv.classList.remove('hidden');
            successDiv.classList.add('hidden');
            document.getElementById('subject').value = '';
            document.getElementById('content').value = '';
            document.getElementById('template').value = '';
            selectAllSubscribers(); // Reset all subscribers to selected
            location.reload(); // Reload to update campaign history
        }, 5000);
        
    } catch (error) {
        progressDiv.classList.add('hidden');
        formDiv.classList.remove('hidden');
        showToast(error.message || 'Failed to send campaign', 'error');
    }
});

// Send campaign with progress tracking
async function sendCampaignWithProgress(formData) {
    let batch = 0;
    let isComplete = false;
    let totalSent = 0;
    let totalFailed = 0;
    let totalRecipients = 0;
    
    // Initialize progress display
    updateProgressDisplay(0, 0, 0, 'Preparing to send...');
    addProgressLog('Starting campaign...', 'info');
    
    while (!isComplete) {
        try {
            // Add batch number to form data
            formData.set('batch', batch);
            
            const response = await fetch('../api/send-campaign-batch.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.message);
            }
            
            // Update progress
            totalSent = result.total_sent;
            totalFailed = result.total_failed;
            totalRecipients = result.total_recipients;
            isComplete = result.is_complete;
            
            // Update UI
            updateProgressDisplay(totalSent + totalFailed, totalRecipients, result.progress_percentage, 
                isComplete ? 'Campaign completed!' : `Sending batch ${batch + 1}...`);
            
            // Log batch results
            if (result.batch_sent > 0) {
                addProgressLog(`✅ Batch ${batch + 1}: ${result.batch_sent} emails sent successfully`, 'success');
            }
            
            if (result.failed_emails_this_batch && result.failed_emails_this_batch.length > 0) {
                addProgressLog(`❌ Batch ${batch + 1}: ${result.failed_emails_this_batch.length} emails failed`, 'error');
            }
            
            // Log individual emails in this batch
            if (result.current_batch_emails) {
                result.current_batch_emails.forEach(email => {
                    const failed = result.failed_emails_this_batch.includes(email);
                    addProgressLog(`${failed ? '❌' : '✅'} ${email}`, failed ? 'error' : 'success');
                });
            }
            
            if (isComplete) {
                // Update success message with final stats
                updateSuccessMessage(result.final_stats);
                addProgressLog(`🎉 Campaign completed! ${totalSent} sent, ${totalFailed} failed`, 'success');
            } else {
                // Small delay before next batch
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            
            batch++;
            
        } catch (error) {
            addProgressLog(`❌ Error in batch ${batch + 1}: ${error.message}`, 'error');
            throw error;
        }
    }
}

// Update progress display
function updateProgressDisplay(sent, total, percentage, status) {
    document.getElementById('progress-text').textContent = `${sent} of ${total} sent`;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    document.getElementById('current-status').textContent = status;
}

// Add progress log entry
function addProgressLog(message, type = 'info') {
    const logDiv = document.getElementById('progress-log');
    const entry = document.createElement('div');
    
    const timestamp = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="text-gray-400">[${timestamp}]</span> ${message}`;
    
    if (type === 'error') {
        entry.classList.add('text-red-600');
    } else if (type === 'success') {
        entry.classList.add('text-green-600');
    }
    
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to bottom
}

// Update success message with final stats
function updateSuccessMessage(finalStats) {
    if (!finalStats) return;
    
    const successMessage = document.getElementById('success-message');
    const successDetails = document.getElementById('success-details');
    
    successMessage.textContent = `Campaign delivered to ${finalStats.total_sent} subscribers`;
    
    const duration = finalStats.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    
    successDetails.innerHTML = `
        <div class="grid grid-cols-2 gap-4 text-left">
            <div>
                <strong>Success Rate:</strong> ${finalStats.success_rate}%<br>
                <strong>Duration:</strong> ${timeStr}
            </div>
            <div>
                <strong>Sent:</strong> ${finalStats.total_sent}<br>
                <strong>Failed:</strong> ${finalStats.total_failed}
            </div>
        </div>
        ${finalStats.failed_emails && finalStats.failed_emails.length > 0 ? 
            `<div class="mt-2 text-left"><strong>Failed emails:</strong><br>${finalStats.failed_emails.join(', ')}</div>` 
            : ''}
    `;
}

// Delete subscriber
async function deleteSubscriber(id) {
    if (!confirm('Are you sure you want to remove this subscriber?')) {
        return;
    }
    
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('csrf_token', csrfToken);
        
        const response = await fetch('../api/delete-subscriber.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast('Subscriber removed successfully');
            location.reload();
        } else {
            showToast(result.message || 'Failed to remove subscriber', 'error');
        }
    } catch (error) {
        showToast('Network error. Please try again.', 'error');
    }
}
</script>

<?php include '../includes/footer.php'; ?>