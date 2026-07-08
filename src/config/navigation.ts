import type { LucideIcon } from 'lucide-react'
import { Download, BookOpen, Trophy, GitBranch, User, Code, Images } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'guide' -> t('nav.guide')
	path: string // URL 路径，如 '/guide'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// Just Be Patient 导航分类（基于实际文章目录 + 关键词.json）
// 顺序参考 00基础信息.md 推荐：Guide / Endings / Choices / Characters / Download / Secrets / Developer
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'endings', path: '/endings', icon: Trophy, isContentType: true },
	{ key: 'choices', path: '/choices', icon: GitBranch, isContentType: true },
	{ key: 'characters', path: '/characters', icon: User, isContentType: true },
	{ key: 'download', path: '/download', icon: Download, isContentType: true },
	{ key: 'scenes', path: '/scenes', icon: Images, isContentType: true },
	{ key: 'developer', path: '/developer', icon: Code, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1), // 移除开头的 '/'
)

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
