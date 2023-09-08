/*
 * @Author: 大蒙
 * @Date: 2023-09-08 13:19:37
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-08 16:07:45
 * @FilePath: /my-project/.eslintrc.js
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
export default {
    // 指定环境，例如浏览器和ES6
    env: {
        browser: true,
        es6: true,
    },
    // 使用的扩展，可以根据项目选择不同的配置（如：airbnb，standard等）
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    // 解析器选项
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    // 插件
    plugins: [
        'react',
        'jsx-a11y',
    ],
    // 自定义规则，可以根据项目需求进行配置
    rules: {
        // 添加项目自定义规则
        'react/prop-types': 'off', // 禁用 prop-types 检查
        'no-console': 'warn', // 控制台警告而不是错误
        // 更多自定义规则...
    },
    // 设置全局变量，可以在项目中使用而不报错
    globals: {
        // 例如，你可以设置全局的React变量，以便在不引入时使用
        React: 'writable',
    },
    // 如果需要，你可以在这里添加项目的特定设置
    settings: {
        react: {
            version: 'latest', // 根据项目中的React版本进行调整
        },
    },
};