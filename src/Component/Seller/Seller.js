
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const Seller = () => {

    const [findUser, setFindUser]=useState()
  
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const role=form.role.value
        setFindUser(role)
        
    }
        const [dbUser, setDbUser]=useState([])
        useEffect(()=>{
            axios
            .get(`https://car-resale-market-server.vercel.app/users/${findUser}`)
            .then((res) => setDbUser(res.data));
        },[findUser])
        
        const handleDeletes = id=>{
            const agree =window.confirm('you want to delete')
            if(agree){
                fetch(`https://car-resale-market-server.vercel.app/usersDelete/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then (data=>{
                    if(data.deletedCount > 0){
                      const remaining = dbUser.filter(r => r._id !== id);
                      setDbUser(remaining);
                        toast.success('delete successfully')
                    }
                })
            }
          }

          const Status={
            Status:"Verified"
         }
    
        const handleAdvertise=id=>{
             
            fetch(`https://car-resale-market-server.vercel.app/users/${id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(Status)
    
            })
            .then (res=>res.json())
            .then (result=>{
                if(result.acknowledged){
    
                    toast.success('Verify successful')
                }
            })
        }

    return (
        <div className='mt-10'>
         
            
            <form onSubmit={handleSubmit} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">filter User and Seller</span>
                        </label>
                        <select name='role' className="select w-full input input-bordered">
                            <option value='User'>User</option>
                            <option value='Seller'>Seller</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Find User & Seller</button>
                    </div>
                </div>
            </form>
            <div className='text-center my-10'><p className='text-3xl'>Total  {dbUser[0]?.role} {dbUser.length}</p></div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>Name</th> 
                        <th>Email</th> 
                        <th>User Role</th> 
                        <th>Status</th>
                        <th>Verify</th> 
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            dbUser.map((uInfo,i)=><tr key={uInfo._id}>
                            <th>{i+1}</th> 
                            <td>{uInfo.name}</td>
                            <td>{uInfo.email}</td> 
                            <td>{uInfo.role}</td> 
                           
                            <td>{uInfo.Status}</td>
                            {
                                uInfo?.Status === "Verified"? <> <td className='text-green-600 text-xl'>Verified</td></>:<>
                                <td><button onClick={()=>handleAdvertise(uInfo._id)} className='btn btn-sm bg-blue-500'>Verify</button></td>
                                </>
                            }
                            <td><button onClick={()=>handleDeletes(uInfo._id)} className='btn btn-sm bg-red-600'> DELETE</button></td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
            
        </div>
    );
};

export default Seller;