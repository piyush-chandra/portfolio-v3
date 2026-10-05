"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, Linkedin, Music, Mail, Twitter, LucideIcon } from "lucide-react";

const SOCIAL_LINKS: Array<{
    name: string;
    icon: LucideIcon | React.ComponentType;
    url: string;
    color: string;
}> = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/piyushclick/",
            color: "hover:bg-blue-600"
        },
        // {
        //     name: "Spotify",
        //     icon: Music,
        //     url: "https://open.spotify.com/user/YOUR_SPOTIFY_ID",
        //     color: "hover:bg-green-600"
        // },
        {
            name: "Gmail",
            icon: Mail,
            url: "mailto:piyushchandra@duck.com",
            color: "hover:bg-red-600"
        },
        {
            name: "Twitter",
            icon: Twitter,
            url: "https://x.com/piyushstwt",
            color: "hover:bg-sky-500"
        },
        {
            name: "Strava",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                </svg>
            ),
            url: "https://piyus.site/strava",
            color: "hover:bg-orange-600"
        }
    ];

export function SocialFAB() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50">
            <AnimatePresence>
                {isExpanded && (
                    <div className="absolute bottom-20 right-0 flex flex-col-reverse items-center gap-3">
                        {/* Social Links */}
                        {SOCIAL_LINKS.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ duration: 0.15, delay: (index + 1) * 0.03 }}
                                    className={`w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white transition-all ${link.color} shadow-lg`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IconComponent className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>
                )}
            </AnimatePresence>

            {/* Main FAB Button - stays in place */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white shadow-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <LinkIcon className="w-6 h-6" />
            </motion.button>
        </div>
    );
}
