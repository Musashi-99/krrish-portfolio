import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, Plus } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
	href?: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = "Let's Build Something",
	description = "Have a project in mind? Let's collaborate and create something amazing together. Feel free to reach out!",
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'relative grid h-full w-full shadow-xl md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden',
				className,
			)}
			{...props}
		>
			<div 
				className="absolute inset-0 z-0"
				style={{
					backdropFilter: 'blur(20px)',
					background: 'rgba(255, 255, 255, 0.05)',
				}}
			/>
			<div 
				className="absolute inset-0 z-0"
				style={{
					boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.1), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)',
				}}
			/>
			<Plus className="absolute -top-3 -left-3 h-6 w-6 text-white/30 z-20" />
			<Plus className="absolute -top-3 -right-3 h-6 w-6 text-white/30 z-20" />
			<Plus className="absolute -bottom-3 -left-3 h-6 w-6 text-white/30 z-20" />
			<Plus className="absolute -right-3 -bottom-3 h-6 w-6 text-white/30 z-20" />
			<div className="relative z-10 flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-8">
					<h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
						{title}
					</h1>
					<p className="font-body text-white/70 max-w-xl text-sm md:text-base lg:text-lg">
						{description}
					</p>
					<div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 pt-4">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'relative z-10 flex h-full w-full items-center border-t border-white/10 p-5 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
				style={{
					background: 'rgba(0, 0, 0, 0.2)',
				}}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	href,
	className,
	...props
}: ContactInfoProps) {
	const content = (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div 
				className="rounded-lg p-3"
				style={{
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
				}}
			>
				<Icon className="h-5 w-5 text-white" />
			</div>
			<div>
				<p className="font-display text-white">{label}</p>
				<p className="font-body text-white/60 text-xs">{value}</p>
			</div>
		</div>
	);

	if (href) {
		return (
			<a 
				href={href} 
				target="_blank" 
				rel="noopener noreferrer"
				className="block hover:opacity-80 transition-opacity"
			>
				{content}
			</a>
		);
	}

	return content;
}
