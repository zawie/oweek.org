import 'antd/dist/antd.css';
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Typography, Button, Input } from 'antd'
import { UserAddOutlined, UserOutlined} from "@ant-design/icons";


const { Title } = Typography;
const { Search } = Input;

function MyApp({ Component, pageProps }: AppProps) {
    return <div style={{backgroundColor: "whitesmoke", minHeight:"100vh"}}>
        <div style={{
            backgroundColor: "white",
            position: "absolute",
            width: "100vw",
            minHeight: 128,
            paddingLeft: 16,
            display:"flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <div style={{paddingTop:10 }}>
                <Title style={{
                    fontSize: 48,
                }}> 🌳 O-Week Genealogy </Title>
            </div>
            <div style={{
                height:"100%",
                marginRight: 25
            }}>
                <Button type="link"
                    href="https://forms.gle/hUfXkadg8Z8L5Bt98"
                    size="large"
                    style={{
                        fontSize: 28,
                        minWidth: 128,
                }}> <UserAddOutlined/> Add a Family </Button>
            </div>
        </div>
        <div style={{
            backgroundColor:"whitesmoke",
            minHeight:"100%",
            paddingTop: 128
        }}>
            <br/>
            <Component {...pageProps}/>
        </div>
  </div>
}

export default MyApp