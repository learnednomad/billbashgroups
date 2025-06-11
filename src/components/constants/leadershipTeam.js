/**
 * Array of leadership team members with their details.
 * @type {Array<{name: string, title: string, bio: string, imageUrl?: string, socialLinks?: Array<{platform: string, url: string}>}>}
 */

import bashirImage from '@/assets/images/leadership/bashir-concept.png';
import mustaphaImage from '../../assets/images/leadership/mustapha-ahmad-safiyo.jpg';
import aminImage from '../../assets/images/leadership/amin-muhammad-usman.jpg';
import hassanImage from '../../assets/images/leadership/hassan-abdulrahman-abubakar.jpg';
import mahmudImage from '../../assets/images/leadership/mahmud-hussain-jafar.jpg';
import abubakarImage from '../../assets/images/leadership/abubakar-bello.jpg';

export const leadershipTeam = [
    {
        name: "Dr. Bashir Ahmad Safiyo",
        title: "CEO",
        bio: "Dr. Safiyo is the visionary founder of Bill Bash Group, leading the company with a focus on innovation and sustainable growth across all sectors. His strategic direction has been pivotal to the group's expansion and success.",
        imageUrl: bashirImage,
        socialLinks: [{ platform: "LinkedIn", url: "#https://linkedin.com/in/bashir-safiyo" }],
    },
    {
        name: "Eng. Mustapha Ahmad Safiyo",
        title: "COO",
        bio: "Eng. Mustapha oversees the day-to-day operations of Bill Bash Group, ensuring efficiency and excellence. His engineering background brings a meticulous approach to project management and operational strategy.",
        imageUrl: mustaphaImage,
        socialLinks: [{ platform: "LinkedIn", url: "#https://linkedin.com/in/mustapha-safiyo" }],
    },
    {
        name: "Amin Muhammad Usman",
        title: "Managing Director",
        bio: "Amin Muhammad Usman spearheads market development and client relations. His leadership in managing key business units contributes significantly to the group's market presence and profitability.",
        imageUrl: aminImage,
        socialLinks: [{ platform: "LinkedIn", url: "https://linkedin.com/in/amin-usman" }],
    },
    {
        name: "Hassan Abdulrahman Abubakar",
        title: "Manager",
        bio: "Hassan is a dynamic manager responsible for overseeing specific projects within the group, ensuring they are delivered on time and within budget while maintaining quality standards.",
        imageUrl: hassanImage,
        socialLinks: [{ platform: "LinkedIn", url: "https://linkedin.com/in/hassan-abubakar" }],
    },
    {
        name: "Mahmud Hussain Jafar",
        title: "Manager",
        bio: "Mahmud brings extensive experience in logistics and supply chain management, optimizing processes within the truck importation and spare parts divisions of Bill Bash Group.",
        imageUrl: mahmudImage,
        socialLinks: [{ platform: "LinkedIn", url: "https://linkedin.com/in/mahmud-jafar" }],
    },
    {
        name: "Abubakar Bello",
        title: "Manager",
        bio: "Abubakar specializes in agricultural operations and development. He leads initiatives in the farming sector, focusing on sustainable practices and community engagement.",
        imageUrl: abubakarImage,
        socialLinks: [{ platform: "LinkedIn", url: "https://linkedin.com/in/abubakar-bello" }],
    },
];