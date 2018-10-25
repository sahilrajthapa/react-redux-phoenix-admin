import { connect } from 'react-redux'
import UserList from './UserList'
import { getUsers } from '../../actions/userlist'

const mapStateToProps = state => ({
    userList: state.userList.userList
})

const mapDispatchToProps=(dispatch)=>{
    return{
     getUsers:()=>dispatch(getUsers())
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);