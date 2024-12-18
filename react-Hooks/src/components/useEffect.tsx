/*
 * @Description: 
 * @Autor: sy
 * @Date: 2024-12-18 11:17:22
 * @LastEditors: sy
 * @LastEditTime: 2024-12-18 11:17:31
 */
import React, { useState, useEffect } from 'react';
interface UserData {
   name: string;
   email: string;
   username: string;
   phone: string;
   website: string;
}
function App() {
   const [userId, setUserId] = useState(1); // 假设初始用户ID为1
   const [userData, setUserData] = useState<UserData | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchUserData = async () => {
         setLoading(true);
         try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); //免费api接口 可以直接使用
            if (!response.ok) {
               throw new Error('网络响应不正常');
            }
            const data = await response.json();
            setUserData(data);
         } catch (err: any) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchUserData();
   }, [userId]);

   const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(parseInt(event.target.value));
   };

   return (
      <div>
         <h5>用户信息应用</h5>
         <label>
            输入用户ID:
            <input type="number" value={userId} onChange={handleUserChange} min="1" max="10" />
         </label>
         {loading && <p>加载中...</p>}
         {error && <p>错误: {error}</p>}
         {userData && (
            <div>
               <h2>用户信息</h2>
               <p>姓名: {userData.name}</p>
               <p>邮箱: {userData.email}</p>
               <p>用户名: {userData.username}</p>
               <p>电话: {userData.phone}</p>
               <p>网站: {userData.website}</p>
            </div>
         )}
      </div>
   );
}

export default App;