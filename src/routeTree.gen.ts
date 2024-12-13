/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as OverviewAnalyticsImport } from './routes/overview/analytics'
import { Route as BlogPostsImport } from './routes/blog/posts'
import { Route as BlogPostImport } from './routes/blog/$post'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OverviewAnalyticsRoute = OverviewAnalyticsImport.update({
  id: '/overview/analytics',
  path: '/overview/analytics',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostsRoute = BlogPostsImport.update({
  id: '/blog/posts',
  path: '/blog/posts',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostRoute = BlogPostImport.update({
  id: '/blog/$post',
  path: '/blog/$post',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/blog/$post': {
      id: '/blog/$post'
      path: '/blog/$post'
      fullPath: '/blog/$post'
      preLoaderRoute: typeof BlogPostImport
      parentRoute: typeof rootRoute
    }
    '/blog/posts': {
      id: '/blog/posts'
      path: '/blog/posts'
      fullPath: '/blog/posts'
      preLoaderRoute: typeof BlogPostsImport
      parentRoute: typeof rootRoute
    }
    '/overview/analytics': {
      id: '/overview/analytics'
      path: '/overview/analytics'
      fullPath: '/overview/analytics'
      preLoaderRoute: typeof OverviewAnalyticsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/blog/$post': typeof BlogPostRoute
  '/blog/posts': typeof BlogPostsRoute
  '/overview/analytics': typeof OverviewAnalyticsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/blog/$post': typeof BlogPostRoute
  '/blog/posts': typeof BlogPostsRoute
  '/overview/analytics': typeof OverviewAnalyticsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRoute
  '/blog/$post': typeof BlogPostRoute
  '/blog/posts': typeof BlogPostsRoute
  '/overview/analytics': typeof OverviewAnalyticsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/blog/$post'
    | '/blog/posts'
    | '/overview/analytics'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/blog/$post' | '/blog/posts' | '/overview/analytics'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/blog/$post'
    | '/blog/posts'
    | '/overview/analytics'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRoute
  BlogPostRoute: typeof BlogPostRoute
  BlogPostsRoute: typeof BlogPostsRoute
  OverviewAnalyticsRoute: typeof OverviewAnalyticsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRoute,
  BlogPostRoute: BlogPostRoute,
  BlogPostsRoute: BlogPostsRoute,
  OverviewAnalyticsRoute: OverviewAnalyticsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/blog/$post",
        "/blog/posts",
        "/overview/analytics"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/blog/$post": {
      "filePath": "blog/$post.tsx"
    },
    "/blog/posts": {
      "filePath": "blog/posts.tsx"
    },
    "/overview/analytics": {
      "filePath": "overview/analytics.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
