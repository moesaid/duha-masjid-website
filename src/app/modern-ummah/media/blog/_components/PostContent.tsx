'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '../_data';
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { getFacebookUrl, getTwitterUrl, getLinkedinUrl } from '@phntms/react-share';
import { useState, useEffect } from 'react';

interface PostContentProps {
    post: BlogPost;
}

export function PostContent({ post }: PostContentProps) {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, []);

    if (!post.content) return null;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: shareUrl,
                });
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error('Error sharing:', err);
                    handleCopyLink();
                }
            }
        } else {
            handleCopyLink();
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`
                    prose prose-lg prose-slate max-w-none
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline 
                    prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-50 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-li:text-slate-600 
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                    
                    /* Custom Classes Support for Heritage Data */
                    [&_.lead]:text-xl [&_.lead]:text-slate-600 [&_.lead]:border-l-4 [&_.lead]:border-amber-400 [&_.lead]:pl-4 [&_.lead]:italic [&_.lead]:mb-8
                    
                    /* Quranic Verses */
                    [&_.quran]:bg-emerald-50/50 [&_.quran]:border-emerald-500 [&_.quran]:text-center [&_.quran]:py-8 [&_.quran]:px-6 [&_.quran]:rounded-lg
                    [&_.quran_p:first-child]:font-serif [&_.quran_p:first-child]:text-2xl [&_.quran_p:first-child]:leading-loose [&_.quran_p:first-child]:mb-4
                    
                    /* Tables */
                    [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm md:[&_table]:text-base
                    [&_thead]:bg-emerald-900 [&_thead]:text-white
                    [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:border-b-0
                    [&_td]:p-4 [&_td]:border-b [&_td]:border-slate-100
                    [&_tr:hover]:bg-slate-50
                    
                    /* Video Wrapper */
                    [&_.video-wrapper]:relative [&_.video-wrapper]:w-full [&_.video-wrapper]:pt-[56.25%] [&_.video-wrapper]:rounded-xl [&_.video-wrapper]:overflow-hidden [&_.video-wrapper]:shadow-lg [&_.video-wrapper]:my-8
                    [&_.video-wrapper_iframe]:absolute [&_.video-wrapper_iframe]:inset-0 [&_.video-wrapper_iframe]:w-full [&_.video-wrapper_iframe]:h-full
                `}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="border-t border-b border-slate-100 py-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                    <Share2 size={20} className="text-emerald-600" />
                    Share this article
                </h3>
                <div className="flex gap-4">
                    <a
                        href={getFacebookUrl({ url: shareUrl })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        aria-label="Share on Facebook"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href={getTwitterUrl({ url: shareUrl, text: post.title })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-500 transition-colors"
                        aria-label="Share on Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href={getLinkedinUrl({ url: shareUrl })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <button
                        onClick={handleShare}
                        className="p-2 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 transition-colors relative md:hidden"
                        aria-label="Share Article"
                    >
                        <Share2 size={20} />
                    </button>
                    <button
                        onClick={handleCopyLink}
                        className="p-2 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 transition-colors relative hidden md:block"
                        aria-label="Copy Link"
                    >
                        {copied ? <Check size={20} /> : <LinkIcon size={20} />}
                    </button>
                </div>
            </div>
        </article>
    );
}
