import React from "react";

import { MarkdownRender } from "@douyinfe/semi-ui";

function IndexPage() {
  return (
    <MarkdownRender
      raw={`

## Comfy-workflow-UI

---

### 简介
[Comfy-workflow-UI]() 是 Semi Design 基于本地AI能力提供的**工作流效能管理工具（Design System Management）**。适用于各种规模的团队，无论你是需要简化工作流程，提高团队协作，还是增加生产力，我们都有适合你的功能

#### 初创企业
- 无需从 0 到 1 投入大量研发资源，快速复用开源社区优秀方案, 低成本快速定制具备品牌特色的设计系统。
- 一键支持暗色模式生成，支持根据品牌色快速生成包含 320 个全色阶、兼容深/浅两种模式的色彩系统，并支持动态切换
- 不断进化，DSM + Semi Design 组件由<u>抖音前端架构团队</u>专业维护，已稳定迭代五年+，值得信赖

#### 自由设计师/个人开发者
- 低成本快速创建风格各异的设计系统，更少时间，更快交付
- 研发接入友好，无需反复沟通，交付npm包产物，一键完成代码接入


![DSM](https://semi.design/dsm_manual/content/introduction/start/start-intro.png)

`}
    />
  );
}

export default IndexPage;
