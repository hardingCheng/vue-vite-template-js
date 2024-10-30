// commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"],
  rule: {
    "subject-case": [0], // subject大小写不做校验

    // 类型枚举，git提交type必须是以下类型
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新增功能
        "fix", // 修复缺陷
        "docs", // 文档变更
        "style", // 代码格式（不影响功能，例如空格、分号等格式修正）
        "refactor", // 代码重构（不包括 bug 修复、功能新增）
        "perf", // 性能优化
        "test", // 添加疏漏测试或已有测试改动
        "build", // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        "ci", // 修改 CI 配置、脚本
        "revert", // 回滚 commit
        "chore" // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ]
    ]
  },
  prompt: {
    // 可选类型
    types: [
      { value: "feat", name: "feat: 新增功能" },
      { value: "fix", name: "fix: 修复功能" },
      { value: "docs", name: "docs: 更新文档" },
      { value: "style", name: "style: 代码格式变更" },
      { value: "refactor", name: "refactor： 代码重构：非新增功能非修改功能" },
      { value: "perf", name: "perf: 性能优化" },
      { value: "test", name: "test: 增加测试用例" },
      { value: "chore", name: "chore: 构建过程或辅助工具的变动" },
      { value: "revert", name: "revert: 代码回退" }
    ],
    // 消息步骤
    messages: {
      type: "请选择提交类型:",
      customScope: "请输入修改范围(可选):",
      subject: "请简要描述提交(必填):",
      body: "请输入详细描述(可选):",
      footer: "请输入要关闭的issue(可选):",
      confirmCommit: "确认使用以上信息提交？(y/n/e/h)"
    },
    // 跳过问题
    skipQuestions: ["body", "footer"],
    // subject文字长度默认是72
    subjectLimit: 72
  }
};
