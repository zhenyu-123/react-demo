import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
const Xiaojiejie = ({ router }) => {
  const [color, setColor] = useState("blue");

  const switchTab = () => {
    setColor(color == "blue" ? "red" : "blue");
  };

  return (
    <>
      <div>{router.query.name},来为我们服务了 .</div>
      <hr />
      <button onClick={switchTab}>切换颜色</button><hr/>
      <Link href="/">
        <a>返回首页</a>
      </Link>

      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </>
  );
};

// Xiaojiejie.getInitialProps = async () => {
//   const promise = new Promise((resolve) => {
//     axios('http://apis.juhe.cn/simpleWeather/query?city=大同&key=b47328efadccbd53cecffb6b6b54fab9').then(
//         (res)=>{
//             console.log('远程数据结果：',res)
//             resolve(res.data.data)
//         }
//     )
//   });
//   return await promise;
// };

export default withRouter(Xiaojiejie);
