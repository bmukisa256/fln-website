'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

// ============================================================================
// DATA
// ============================================================================

const categories = [
  { value: "all", label: "All Photos" },
  { value: "events", label: "Events" },
  { value: "conferences", label: "Conferences" },
  { value: "workshops", label: "Workshops" },
  { value: "community", label: "Community" },
];

const galleryImages = [
  { src: '/imgs/nk7.jpg', title: 'NKUMBA UNIVERSITY', description: 'The Female Lawyers\' Network has this year been able to launch a club in Nkumba University', category: 'events' },
  { src: '/imgs/bs2.jpg', title: 'BISHOP STUART UNIVERSITY-MBARARA', description: 'The Female Lawyers\' Network has this year been able to launch a club in Bishop Stuart University', category: 'events' },
  { src: '/imgs/kc2.jpg', title: 'KING CEASOR UNIVERSITY-GABA', description: 'The Female Lawyers\' Network has this year been able to launch a club in King Ceasor University', category: 'events' },
  { src: '/imgs/iuiu.jpg', title: 'ISLAMIC UNIVERSITY IN UGANDA', description: 'Law School End of year Dinner and Handover Ceremony at IUIU Female Campus Kabojja-2023', category: 'events' },
  { src: '/imgs/ist.jpg', title: 'INSTITUTE FOR SOCIAL TRANSFORMATION', description: 'The FLN CEO (right) and the Executive Coordinator, (left) after a fruitful discussion with the IST Executive Director, Maureen Wagubi.', category: 'conferences' },
  { src: '/imgs/nm.jpg', title: 'NATIONAL MARKET WOMEN ENTREPRENEURS\' SYMPOSIUM', description: 'The FLN President and CEO attend the 5th Annual National Market Women Entrepreneurs\' Symposium.', category: 'events' },
  { src: '/imgs/csr.jpg', title: 'CORPORATE SOCIAL RESPONSIBILITY', description: 'The female lawyers\' Network carried out Corporate Social Responsibility (CSR) at Katalemwa Cheshire.', category: 'events' },
  { src: '/imgs/ulsr.jpg', title: 'UGANDA LAW SOCIETY RULE OF LAW BOOT CAMP', description: 'The FLN team attends the Uganda Law Society Rule of Law Boot Camp held at Makerere University in October 2023', category: 'workshops' },
  { src: '/imgs/tj.jpg', title: 'THE JUDICIARY', description: 'Courtesy calls to different offices in the Judiciary to streamline areas of collaboration.', category: 'events' },
  { src: '/imgs/dfcu.jpg', title: 'DFCU BANK(WOMEN IN BUSINESS)', description: 'Meeting with the Manager DFCU Women in Business.', category: 'conferences' },
  { src: '/imgs/aah.jpg', title: 'ACTION AGAINST HUNGER', description: 'Collaboration meeting with the Country Director of Action Against Hunger.', category: 'conferences' },
  { src: '/imgs/iwj.jpg', title: 'INTERNATIONAL ASSOCIATION OF WOMEN JUDGES', description: 'Courtesy call to the president of the International Association of Women Judges.', category: 'conferences' },
  { src: '/imgs/eals.jpg', title: 'EAST AFRICAN LAW SOCIETY', description: 'The FLN CEO with a team from the East Africa Law Society at a multi-stakeholder meeting.', category: 'conferences' },
  { src: '/imgs/gl.jpg', title: 'FLN GRAND LAUNCH', description: 'The FLN Grand Launch of the 5-year Strategic Plan at Hotel Africana.', category: 'events' },
  { src: '/imgs/dn1.jpg', title: 'FLN DISTINGUISHED DINNER', description: '', category: 'events' },
  { src: '/imgs/JM.jpg', title: 'JURAL MEDIA', description: 'Collaboration with Jural Media, a virtual media house.', category: 'conferences' },
  { src: '/imgs/pds.jpg', title: 'PERSONAL DEVELOPMENT SEMINAR', description: 'Personal Development Seminar by Mandela Group.', category: 'workshops' },
  { src: '/imgs/IMG-20250416-WA0028.jpg', title: 'CLIMATE JUSTICE 2025 ', description: 'Climate justice at Busukuma headed by the FLN president,Dr.Joyce Nalunga B.', category: 'events' },
  { src: '/imgs/IMG-20250416-WA0021.jpg', title: 'CLIMATE 2025', description: 'At Busukuma, the team handed over various types of trees to the locals.', category: 'events' },
  { src: '/imgs/IMG-20250501-WA0018.jpg', title: 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', description: 'Climate Change sensitization drive headed by FLN president,Dr.Joyce Nalunga B.', category: 'events' },
  { src: '/imgs/IMG-20250501-WA0021.jpg', title: 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', description: 'Kajjansi Market', category: 'events' },
  { src: '/imgs/IMG-20250501-WA0023.jpg', title: 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', description: 'The locals were very receptive and welcoming to the drive.', category: 'events' },
  { src: '/imgs/IMG-20250501-WA0026.jpg', title: 'KAJJANSI MARKET CLIMATE CHANGE SENSITIZATION 2025', description: 'The locals were very receptive and welcoming to the drive.', category: 'events' },
  { src: '/imgs/IMG-20250616-WA0064.jpg', title: 'FLN President at Blessed Parents\' School about Climate change', description: 'FLN empowers young girls in climate justice.', category: 'events' },
  { src: '/imgs/IMG-20250616-WA0061.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250616-WA0063.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250616-WA0068.jpg', title: 'Blessed Parents\' School', description: 'Climate justice is not just about protecting the environment — it is about protecting people, especially women and girls, who are often the most affected by climate crises.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0027.jpg', title: 'International Biometrics Society Conference at Global Hotel.', description: 'Mentorship equips them to not only understand the complex intersections between gender and climate change, but also to become agents of change in their communities.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0026.jpg', title: '', description: 'Women and girls are among the most affected by climate change due to existing social, economic, and cultural inequalities.', category: 'conferences' },
  { src: '/imgs/IMG-20250618-WA0045.jpg', title: '', description: 'FLN President Mentors Women on Climate Justice 16th June 2025 as part of the Conference organised by the ', category: 'conferences' },
  { src: '/imgs/IMG-20250618-WA0041.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250618-WA0042.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250619-WA0022.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250619-WA0048.jpg', title: 'FLN Climate change activities sponsored by Global fund for women', description: '', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0039.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0038.jpg', title: '', description: 'The purpose of mentoring women and girls on climate justice is to empower them with confidence, and leadership skills to actively participate in equitable responses to the climate crisis.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0035.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0029.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0030.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0031.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0004.jpg', title: 'Victory Senior Secondary School', description: 'The fight for climate justice will not be won without the full participation of girls.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0070.jpg', title: '', description: 'They are not just part of the future — they are central to today\'s solutions.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0071.jpg', title: '', description: 'By empowering girls, we do not only advance gender equality, we unlock a generation of resilient leaders who will defend our planet with courage, knowledge, and hope.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0062.jpg', title: '', description: 'Let us raise empowered girls for a just and sustainable world.', category: 'events' },
  { src: '/imgs/IMG-20250619-WA0079.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0005.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0010.jpg', title: '', description: 'The time to act is now.', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0018.jpg', title: 'Buganda Road Primary School', description: 'Invest in girls\' education, especially climate literacy and green skills.', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0023.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0019.jpg', title: '', description: 'Promote inclusive policies that recognize the gender-climate connection.', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0021.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0024.jpg', title: '', description: 'Provide leadership opportunities and safe platforms for girls to participate in decision-making.', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0035.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0025.jpg', title: '', description: 'Protect girls from gender-based violence exacerbated by climate crises.', category: 'events' },
  { src: '/imgs/IMG-20250620-WA0038.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0002.jpg', title: 'Mpererewe Local Communities', description: 'FLN is passionate about building climate change resilience in schools which is crucial to ensure that students, staff, and infrastructure can withstand and adapt to the impacts of climate change', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0005.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0004.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0007.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0008.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0012.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0006.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250621-WA0001.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250624-WA0020.jpg', title: 'Local Leadership', description: 'Women leaders', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0032.jpg', title: 'Tree Planting', description: 'Women leading tree planting', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0034.jpg', title: 'Climate Training', description: 'Supporting women-led initiatives', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0025.jpg', title: 'Inclusive Solutions', description: 'Gender equality in climate policy', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0022.jpg', title: 'Indigenous Knowledge', description: 'Valuing traditional conservation', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0024.jpg', title: 'Community Action', description: 'Local initiatives', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0029.jpg', title: 'Women Farmers', description: 'Agricultural support', category: 'community' },
  { src: '/imgs/IMG-20250628-WA0035.jpg', title: 'Group Activity', description: 'Community program', category: "community" },
  { src: '/imgs/IMG-20250725-WA0024.jpg', title: 'FLN Annual Corporate Social Responsibility', description: 'FLN visited disabled children in a home in Mukono to give share with them love,goods and happiness.', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0026.jpg', title: '', description: 'Elizabeth Home Mukono', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0029.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0031.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0032.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0048.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250725-WA0011.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0199.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0194.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0190.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0206.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0207.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0217.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0218.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0242.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0243.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0208.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0214.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0216.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0014.jpg', title: 'FLN at MTN women Work Event', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0015.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0019.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0021.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0020.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/fln_president_awarded.jpg', title: 'FLN President awarded at MTN Women at the work event.', description: 'MTN CEO Sylvia Mulinge', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0023.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0024.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0025.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0016.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0043.jpg', title: 'FLN President mentoring young Lawyers Network', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0045.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0044.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0047.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0088.jpg', title: 'HIGH SCHOOL CLIMATE CHANGE Trainings at stafford high school- Kiteezi.', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0089.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0096.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0093.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0092.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0090.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0085.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0087.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0086.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0078.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0079.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0081.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0071.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0072.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0074.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0113.jpg', title: 'FLN Corporate mentorship series at Deed Microfinance Ltd Ntinda', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0107.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0112.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0103.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0098.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0099.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0101.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0105.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0108.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0106.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0104.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0140.jpg', title: 'FLN Corporate mentorship series at MS muwema & Cos advocates', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0137.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0121.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0123.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0117.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0132.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0126.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0154.jpg', title: 'FLN Climate change activity at St.Balikudembe local market women Busega - at mount camel church', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0150.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0182.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0172.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0171.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0157.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0159.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0156.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0155.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/WhatsApp Image 2025-08-06 at 15.21.31_0a3fda11.jpg', title: 'FLN President mentoring and motivating parents at Gayaza High School.', description: '', category: 'events' },
  { src: '/imgs/WhatsApp Image 2025-08-06 at 15.21.31_1185b52b.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0062.jpg', title: 'Climate change. Young female lawyers talk on climate adaptation and role of youth in climate reduction.', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0056.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0060.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0063.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0054.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250806-WA0048.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0105.jpg', title: 'Owino Market, Kampala - Climate Change Session', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0104.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0103.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0115.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0111.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0100.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0095.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0102.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0096.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0098.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250917-WA0101.jpg', title: '', description: '', category: 'events' },
  { src: '/imgs/IMG-20250921-WA0016.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0019.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0021.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0022.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0018.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0017.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0023.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0034.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0028.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0033.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0031.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0027.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250812-WA0004.jpg', title: "FEMALE LAWYERS'S NETWORK SYMPOSIUM", description: 'TOPIC : WOMEN IN ELECTORAL GOVERNANCE, HAPPENING AT HOTEL AFRICANA ON THE 26TH OF SEPTEMBER 2025', category: 'conferences' },
  { src: '/imgs/IMG-20250813-WA0003.jpg', title: '', description: 'COSTS', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0092.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0094.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250921-WA0025.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0060.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0077.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0038.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0012.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0059.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0014.jpg', title: '', description: '', category: 'conferences' },
  { src: '/imgs/IMG-20250917-WA0013.jpg', title: '', description: '', category: 'conferences' },
];

// ============================================================================
// LIGHTBOX COMPONENT
// ============================================================================

interface LightboxProps {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl max-h-[85vh] mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Caption */}
        {/* Caption */}
        {/* Caption */}
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-32 pb-6 px-4 md:px-8 pointer-events-none">
          <div className="w-full mx-auto pointer-events-auto">
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-gold bg-black/50 backdrop-blur-sm border border-gold/20">
                {currentImage.category}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-white leading-snug drop-shadow-md max-w-3xl">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light max-w-4xl drop-shadow-sm">
                  {currentImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  // Keyboard navigation
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!lightboxOpen) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrev();
        if (e.key === "ArrowRight") goToNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    });
  }

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Gallery" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 bg-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6"
            >
              <Camera className="w-10 h-10 text-gold" />
            </motion.div>

            <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
              Photo Gallery
            </Chip>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Moments
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Browse through our collection of memorable moments, events, and initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FILTERS & GALLERY */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value
                    ? "bg-navy text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Toggle & Count */}
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">
                {filteredImages.length} photos
              </span>

              <div className="flex bg-white rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-navy text-white" : "text-slate-400 hover:text-navy"
                    }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "masonry" ? "bg-navy text-white" : "text-slate-400 hover:text-navy"
                    }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
                  : "columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
              }
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  variants={scaleIn}
                  className={`group cursor-pointer ${viewMode === "masonry" ? "break-inside-avoid" : ""}`}
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${viewMode === "grid" ? "aspect-square" : index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />

                    {/* Hover Overlay */}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 w-full">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 border border-white/20 backdrop-blur-md shadow-sm">
                            {image.category}
                          </span>
                        </div>
                        <h3 className="text-white font-heading font-bold text-lg leading-tight mb-2 drop-shadow-sm">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-gray-200 text-xs leading-relaxed line-clamp-3 opacity-90">
                            {image.description}
                          </p>
                        )}
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">No photos found</h3>
              <p className="text-slate-500 mb-6">Try selecting a different category</p>
              <Button
                onClick={() => setSelectedCategory("all")}
                className="bg-navy text-white font-medium px-6 h-11 rounded-full"
              >
                View All Photos
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATS SECTION */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "60+", label: "Events Captured" },
              { number: "150+", label: "Photos Archived" },
              { number: "25+", label: "Conferences" },
              { number: "30+", label: "Workshops" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Be Part of Our Story
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Join the Female Lawyers Network and create memorable moments with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="/membership"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors text-base"
              >
                Join the Network
              </Button>
              <Button
                as="a"
                href="/events"
                className="bg-transparent border-2 border-white text-white font-bold px-8 h-14 rounded-full hover:bg-white hover:text-purple transition-colors text-base"
              >
                View Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
