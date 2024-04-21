import { Typography, Button } from 'antd';
const { Title } = Typography;
import { TrophyOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';

type PageHeaderProps = {
}

export default function PageHeader(props: PageHeaderProps) {
    return <div className="PageHeader">
        <div style={{paddingTop:10}} >
            <Title style={{
                fontSize: 32,
            }}> <Link passHref legacyBehavior href="/"><a style={{color: 'black'}}>🌳 oweek </a></Link></Title>
        </div>
        <div style={{
            height:"100%",
            marginRight: 25
        }}>
            <Button type='link'
                href='/leaderboard'
                size="large"
                style={{
                    fontSize: 16,
                    minWidth: 128,
            }}> <TrophyOutlined />Leaderboard </Button>
            <Button type="link"
                href="https://forms.gle/hUfXkadg8Z8L5Bt98"
                size="large"
                style={{
                    fontSize: 16,
                    minWidth: 128,
            }}> <UserAddOutlined/> Add a family </Button>
        </div>
    </div>
}