import { useState } from 'react'
import * as React from 'react'
import { Link, Route, useHistory } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBox from '../components/Other/CheckBox'
import Input from '../components/Other/Input';
import axios from 'axios';
import '../styles/Register.css';
import { Console } from 'console';
function Register() {
    const [flow, setFlow] = useState(0)
    const [phone, setPhone] = useState('0')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [birthday,setBirthday]=useState('')
    const [password,setPassword]=useState('')
    const [resetPassword,setResetPassword]=useState('')
    const [check, setCheck] = useState(false)
    const histoty =useHistory()



    const checkHandler = () => {
        setCheck(!check)
    }

    const flowChangeHandler = () => {
        if(flow===0){
            if (phone.length > 9 && check) {
                setFlow(flow + 1)
            }
        }else if(flow===1){
            if (name!=''&& email!=''&& password!=''&&resetPassword!='') {
                setFlow(flow + 1)
                axios.post('https://localhost:5001/api/Register',{
                    username:name,
                    password:password, 
                    phone:phone,
                    email:email,
                    birthday: birthday,
                }).then((respose) => {
                    console.log(respose.data)
                })
            }   
        }

    }


    const form = []
    form.push(
        <form key={0}>
            <h3>註冊</h3>
            <Input labelValue="手機號碼" setValue={setPhone}/>
            <div className='agreeInformationContainer'>
                <div className='agreeInformation'>
                    <CheckBox checkHandler={checkHandler} />

                    <span><span style={{ color: 'red' }}>*</span><a href="https://www.carrefour.com.tw/member-clause/">
                        我同意數位虛擬卡會員條款且建立虛擬會員好康卡
                    </a></span>
                </div>
                <div className='agreeInformation'>
                    <CheckBox />
                    <span><a href="https://www.carrefour.com.tw/joint-marketing/">【家樂福關係企業與合作特約廠商個人資料蒐集、處理及利用告知及同意事項】(＊請詳閱條款內容)</a></span>
                </div>
                <div className='agreeInformation'>
                    <CheckBox />
                    <span>我同意收到電子報並享受多重會員折扣訊息</span>
                </div>

            </div>

            <div className='button' onClick={flowChangeHandler} style={(phone.length > 9 && check) === true ? { background: 'blue' } : {}}>
                下一步
            </div>


            <div className='regTips'>
                <span>已有帳號?</span>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    登入
                </Link>
            </div>
        </form>
    )
    form.push(
        <form key={1}>
            <Input labelValue="姓名" setValue={setName} />
            <input type="datetime-local" className="birthday" onChange={(event)=>{setBirthday(event.target.value)}}/>
            <Input labelValue="Email" setValue={setEmail} />
            <Input labelValue="輸入密碼" setValue={setPassword}/>
            <p>英文字母大小寫加上數字,例AAbbcc123456,共8~20位英數字</p>
            <Input labelValue="請再次輸入密碼" setValue={setResetPassword}/>
            <p>點選「註冊」,即表示您同意接受<a>會員條款</a></p>
            <div className='button' onClick={flowChangeHandler} style={{ background: 'blue' }}>
                註冊
            </div>

        </form>
    )
    form.push(
        <form key={2}>
            <h1>恭喜你註冊成功</h1>
            {flow===2&&
            setTimeout(() => {
                histoty.push('/')
            }, 1000)}
        </form>
    )

    return (
        <div className='register'>
            <div className='registerTop'>
                <div className="logo">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src="https://image.azureedge.net/0239143.png"></img>
                    </Link>
                </div>
            </div>
            <div className='registerFlow'>
                <label style={flow >= 0 ? { color: "#1E5BC6" } : {}} ><span style={flow >= 0 ? { background: "#1E5BC6" } : {}}>1</span>建立帳號</label>
                <p className='line' ></p>
                <label style={flow >= 1 ? { color: "#1E5BC6" } : {}}><span style={flow >= 1 ? { background: "#1E5BC6" } : {}}>2</span>請填寫帳戶資料</label>
                <p className='line'></p>
                <label style={flow >= 2 ? { color: "#1E5BC6" } : {}}><span style={flow >= 2 ? { background: "#1E5BC6" } : {}}>3</span>註冊完成</label>
            </div>

            {form[flow]}
        </div>
    )
}

export default Register
