/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Loading from "@/components/Loading";
import { routerConfig } from "./types";
import NotFound from "@/components/EmptyContent/NotFound";
import ErrorBoundary from "@/components/ErrorBoundary";

import {
  IconHome,
  IconHistogram,
  IconUserSetting,
  IconBookmark,
  IconUserGroup,
  // IconLive,
  IconMark,
  IconSetting,
  IconGridSquare,
  IconUserCardVideo,
  IconDownload,
  IconBox,
  IconCustomize,
  IconPriceTag,
  IconGlobeStroke,
  IconAppCenter,
} from "@douyinfe/semi-icons";

// 实现懒加载的用Suspense包裹 定义函数
const suspenseLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

// 处理路由信息，返回路有对象
const transfer2Routes = (cfgs: routerConfig[], walk: RouteObject[] = []) => {
  // console.log(cfgs);
  for (let i = 0; i < cfgs.length; i++) {
    const { path, elePath, children } = cfgs[i];
    const Element = elePath
      ? lazy(() => import(/* @vite-ignore */ elePath?.replace("@", "..")))
      : () => <NotFound />;
    const element = elePath
      ? suspenseLoad(
          <ErrorBoundary>
            <Element />
          </ErrorBoundary>
        )
      : null;

    const item: RouteObject = {
      path,
      element,
    };
    if (Array.isArray(children)) {
      item.children = transfer2Routes(children);
    }

    walk.push(item);
  }
  return walk;
};

export const routerConfigs: routerConfig[] = [
  {
    path: "/",
    layoutName: "admin",
    elePath: "@/layouts/Admin",
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        path: "/home",
        name: "首页",
        icon: IconHome,
        elePath: "@/pages/Home",
      },

      {
        path: "/gather",
        name: "采集",
        icon: IconDownload,
        children: [
          {
            name: "ComfyUI 工作流导入",
            path: "/gather/importworkflow",
            elePath: "@/pages/Gather/Importworkflow",
            icon: IconMark,
          },
        ],
      },
      {
        path: "/dataSet",
        name: "数据维护",
        icon: IconGridSquare,
        children: [
          {
            path: "/dataSet/workflowsinstance",
            name: "应用实例",
            elePath: "@/pages/DataSet/WorkflowsInstance",
            icon: IconAppCenter,
          },
          {
            path: "/dataSet/tags",
            name: "标签",
            elePath: "@/pages/Tags",
            icon: IconPriceTag,
          },
          {
            path: "/dataSet/studios",
            name: "用户管理",
            elePath: "@/pages/Studios",
            icon: IconUserGroup,
          },
          {
            path: "/dataSet/labels",
            name: "发行商",
            elePath: "@/pages/Labels",
            icon: IconGlobeStroke,
          },
          {
            path: "/dataSet/director",
            name: "导演",
            elePath: "@/pages/Directors",
            icon: IconUserSetting,
          },
          {
            path: "/dataSet/series",
            name: "系列",
            elePath: "@/pages/Series",
            icon: IconBookmark,
          },
        ],
      },

      {
        path: "/console",
        name: "控制台",
        icon: IconHistogram,
        elePath: "@/pages/Console",
      },
      {
        path: "/comfy/playground",
        name: "ComfyflowUI",
        icon: IconCustomize,
        elePath: "@/pages/Comfy/Playground",
      },
      {
        path: "/setting",
        name: "设置",
        icon: IconSetting,
        elePath: "@/pages/Console",
      },
      {
        path: "/chat",
        name: "对话",
        hide: false,
        icon: IconUserCardVideo,
        elePath: "@/pages/Chat",
      },
      {
        path: "/toolbox",
        name: "实用工具箱",
        icon: IconBox,
        elePath: "@/pages/Profiles",
      },
    ],
  },
  {
    name: "登录",
    path: "/login",
    elePath: "@/pages/Login/",
  },
];

export const routers: RouteObject[] = transfer2Routes(routerConfigs);
