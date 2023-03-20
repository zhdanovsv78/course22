import React, {useState} from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import {fetchAll} from "./api/fake.api/user.api"


const App=()=> {
	const [users, setUsers] = useState(fetchAll())
	

	
	const handleDelete = (userId) => {
		setUsers(users.filter((user) => user._id !== userId));
	}


	const handleToggleBookMark = (id) => {
		const newArr = [...users]
		newArr.map(item=>item._id===id?item.bookmark = !item.bookmark:item.bookmark)
		setUsers(newArr)
	}

	const handleReset = () => {
		setUsers(fetchAll())
	}

	const handleOnFilterBookMarkTrue=()=>{
		// handleReset()
		const newArray = [...users].filter(item=>item.bookmark)
		setUsers(newArray)
	}

	const handleOnFilterBookMarkFalse=()=>{
		// handleReset()
		const newArray = [...users].filter(item=>item.bookmark===false)
		setUsers(newArray)
	}

	return (
		<div>
			<SearchStatus length = {users.length}/>
			<button className="btn btn-primary btn-sm" onClick={()=> handleReset()}><i className="bi bi-arrow-clockwise"></i></button>
			<button className="btn btn-primary btn-sm m-2" onClick={()=>handleOnFilterBookMarkTrue()}><i class="bi bi-bookmark-fill"></i></button>
			<button className="btn btn-primary btn-sm m-2" onClick={()=>handleOnFilterBookMarkFalse()}><i class="bi bi-bookmark"></i></button>

			<Users 
				onDelete={handleDelete}
				onMark={handleToggleBookMark}
				users = {users}
			/>
			
		</div>
	)
}

export default App;
