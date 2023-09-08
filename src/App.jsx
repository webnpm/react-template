/*
 * @Author: 大蒙
 * @Date: 2023-09-08 13:19:37
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-09-08 16:08:24
 * @FilePath: /my-project/src/App.jsx
 * @Description:
 *
 * Copyright (c) 2023, All Rights Reserved.
 */
import { useState } from "react"
import "./App.css"
function App() {
	const add = (a, b) => {
		return a + b
	}

	const result = add(2, 3)
	console.log(result)
	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<p>123</p>
			{/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
				<div className="shrink-0">123</div>
				<div>
					<div className="text-xl font-medium text-black">ChitChat</div>
					<p className="text-slate-500">You have a new message!</p>
				</div>
			</div> */}
		</>
	)
}

export default App
