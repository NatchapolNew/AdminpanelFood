import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./listFood.css"
import { deleteFood,getFood, } from "../../services/foodService";
const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async()=>{
    try{
      const res = await getFood();
      setList(res)
    }catch(err){
      console.log(err)
    }
  }

  const removeFood = async(id)=>{
    try{
      const confirm = window.confirm('You want remove this food??')
      if(confirm){
        const success = await deleteFood(id);
        if(success){
        toast.success('Remove food success!!')
        await fetchList();
      }else{
        toast.error('Remove not success!!')
      }
      }
      
    }catch(err){
      console.log(err)
    }
  }


  useEffect(()=>{
    fetchList()
  },[])


  return (
    <>
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item,index)=>{
          return(
            <tr key={index}>
              <td>
                <img src={item.imageUrl} alt="" width={48} height={48} />
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.category}
              </td>
              <td>
                {item.price}.00
              </td>
            <td className="text-danger">
              <i className="bi bi-x-circle-fill" onClick={()=>removeFood(item.id)}></i>
            </td>

            </tr>
          )
        })}
      </tbody>
    </table>
        </div>
      </div>
    </>
  );
};
export default ListFood;
