import React from 'react';
import { cn } from '@/lib/utils';
import {
	Globe,
	Link,
	Mail,
	MapPin,
	Phone,
	FrameIcon,
} from 'lucide-react';
import { Button } from './button';

interface FooterLink {
	title: string;
	href: string;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export default function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative w-full border-t bg-background/80 backdrop-blur-sm', className)}
			{...props}
		>
			<div className="px-4 py-12 md:px-12">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
						<div className="md:col-span-2 space-y-4">
							<div className="flex items-center gap-2">
								<FrameIcon className="size-8" />
								<span className="text-xl font-display">Krrish Kumar</span>
							</div>
							<p className="font-body text-muted-foreground text-sm max-w-sm">
								Backend Engineer & UI/UX Designer. Building interfaces people actually want to use — from ML inference APIs to GPU-driven 3D interactions.
							</p>
							<div className="flex gap-2 pt-2">
								<Button size="icon" variant="outline" className="size-9" asChild>
									<a href="https://linkedin.com/in/krrishbuilds" target="_blank" rel="noopener noreferrer">
										<Link className="size-4" />
									</a>
								</Button>
								<Button size="icon" variant="outline" className="size-9" asChild>
									<a href="https://github.com/Musashi-99" target="_blank" rel="noopener noreferrer">
										<Globe className="size-4" />
									</a>
								</Button>
								<Button size="icon" variant="outline" className="size-9" asChild>
									<a href="mailto:musashikk99@gmail.com">
										<Mail className="size-4" />
									</a>
								</Button>
							</div>
							<div className="space-y-2 pt-4 text-sm text-muted-foreground">
								<p className="flex items-center gap-2">
									<MapPin className="size-4" />
									Kolkata, India
								</p>
								<p className="flex items-center gap-2">
									<Mail className="size-4" />
									musashikk99@gmail.com
								</p>
								<p className="flex items-center gap-2">
									<Phone className="size-4" />
									+91 8697845183
								</p>
							</div>
						</div>
						{footerLinkGroups.map((group) => (
							<div key={group.label}>
								<h3 className="text-sm font-display uppercase mb-4">{group.label}</h3>
								<ul className="space-y-2 font-body text-sm text-muted-foreground">
									{group.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												target={link.href.startsWith('http') ? '_blank' : undefined}
												rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
												className="hover:text-foreground transition-colors"
											>
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
						<p>© 2025 Krrish Kumar. All rights reserved.</p>
						<p>Open to Internships & Startup Roles</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Skills',
		links: [
			{ title: 'Python', href: '#' },
			{ title: 'TypeScript', href: '#' },
			{ title: 'FastAPI', href: '#' },
			{ title: 'React / Next.js', href: '#' },
			{ title: 'Three.js / WebGL', href: '#' },
			{ title: 'AWS / Docker', href: '#' },
			{ title: 'Machine Learning', href: '#' },
			{ title: 'Figma', href: '#' },
		],
	},
	{
		label: 'Projects',
		links: [
			{ title: 'SME Credit Risk Engine', href: '#' },
			{ title: 'IntelliMaintain', href: '#' },
			{ title: 'NeuroMorph Engine', href: '#' },
			{ title: 'Orbito', href: '#' },
			{ title: 'Ecommerce Platform', href: '#' },
			{ title: 'AI Knowledge Survey', href: 'https://ai-knowledge-survey.netlify.app' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'LinkedIn', href: 'https://linkedin.com/in/krrishbuilds' },
			{ title: 'GitHub', href: 'https://github.com/Musashi-99' },
			{ title: 'Email', href: 'mailto:musashikk99@gmail.com' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Service', href: '#' },
			{ title: 'Cookie Policy', href: '#' },
		],
	},
];
