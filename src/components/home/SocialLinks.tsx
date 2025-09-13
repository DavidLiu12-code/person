"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center", className)}>
            <ThemeToggle />
            {socialLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.external ? `${link.href}?utm_source=${utm_source}` : link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                    <CustomIcon name={link.icon} />
                    <span className="sr-only">{link.name}</span>
                </Link>
            ))}
            <Link
                href={`mailto:18640507590@163.com`}
                target="_blank"
                rel="noreferrer"
                aria-label='Email'
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
                <CustomIcon name='email' />
                <span className="sr-only">Email</span>
            </Link>
              <Link
                href={`mailto:liu406203@gmail.com`}
                target="_blank"
                rel="noreferrer"
                aria-label='Email'
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
                <CustomIcon name='email' />
                <span className="sr-only">Email</span>
            </Link>
        </div>
    )
}