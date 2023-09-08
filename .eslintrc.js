/*
 * @Author: 大蒙
 * @Date: 2023-09-08 13:19:37
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-08 13:49:14
 * @FilePath: /my-project/.eslintrc.cjs
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
