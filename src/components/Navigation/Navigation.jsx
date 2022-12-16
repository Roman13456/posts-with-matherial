import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'; 
function Navigation(){
    
    return(
        <>
            <nav style={{display:'flex', justifyContent:'center', gap:'10px'}}>
                <Link to='/'>About</Link>
                <Link to='/todos'>Todos</Link>
            </nav>
            <Outlet/>
        </>
        
    )
}
export default Navigation