import logo from './logo.svg';
import './App.css';
import isMobile from "is-mobile";

function App() {
  return (
    isMobile() ? (<div className="home home-m" style={{backgroundImage:'url(/home-mobile.png)'}}>
        <div
            className="main main-m"
            style={{backgroundImage:'url(/main-mobile.png)'}}
        >
            <img className="top-img top-img-m" src="top1-m.png" alt=""/>
            <div className="text text-m text-width text-width-m tt-margin">
                &nbsp;In the twilight, where &nbsp; blockchain meets game lore, we stand as sovereign alchemists. Our study delves into how tokenomics and on-chain assets &nbsp;redefine gameplay,&nbsp; transforming every interaction into powerful experience.

            </div>
            <div className="text text-m text-width text-width-m text-margin text-margin-m">
                Our creations are not mere games but gateways, shifting the fabric of reality with the free interplay of assets. Crafted in secrecy, meant for reverence, our games are windows to unseen worlds of liberty and wonder. Witness the transformation; behold the new dimensions we unveil.
            </div>
            <div
                className="middle middle-m"
            >
                <div className="middle-img-margin">
                    <img className="middle-img-m" src="middle-mobile.png" alt=""/>
                </div>
                <div className="text text-m text-width-m">
                    &nbsp;Beneath the watchful gaze of&nbsp; the pale moon, Four sovereigns rise, cursed by gods to eternal war.
                </div>
                <div className="text text-m text-margin text-width-m text-margin-m">
                    &nbsp;In realms shadowed by&nbsp; ceaseless conflict, Valiant souls pledge their fealty, Vying for dominion over fractured lands. As five days decree the fate of empires, Only the mightiest grasp immortality’s fleeting whisper.
                </div>
                <div className="middle-bottom middle-bottom-m">
                    <div className="middle-bottom-child">
                        <img className="flower-img" src="flower.png" alt=""/>
                        <div className="flower-text">
                            Enter
                        </div>
                    </div>
                    <div className="middle-bottom-child" onClick={()=>{window.location.href='https://purify-lab.gitbook.io/rise-of-realms/'}}>
                        <img className="flower-img" src="flower.png" alt=""/>
                        <div className="flower-text">
                            Doc
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom-title bottom-title-m">
                More are under experiment...
            </div>
            <img className="bottom-img bottom-img-m" src="bottom-mobile.png" alt=""/>
            <div className="middle-bottom-child bottom-desc bottom-desc-m" onClick={()=>{window.location.href='https://x.com/purifylab_xyz'}}>
                <img className="flower-img" src="flower.png" alt=""/>
                <div className="flower-text">
                    Follow Us
                </div>
                <img className="flower-img" src="flower.png" alt=""/>
            </div>
            <div className="bottom-end bottom-end-m">
                Copyright © 2024 Purify Lab All rights reserved.
            </div>
        </div>
    </div>):(<div className="home" style={{backgroundImage:'url(/home1.png)'}}>
        <div
            className="main"
            style={{backgroundImage:'url(/main.png)'}}
        >
            <img className="top-img" src="top.png" alt=""/>
            <div className="text text-width">
                In the twilight, where blockchain meets game lore, we stand as sovereign alchemists. Our study delves into how tokenomics and on-chain assets redefine gameplay, transforming every interaction into powerful experience.

            </div>
            <div className="text text-width text-margin">
                Our creations are not mere games but gateways, shifting the fabric of reality with the free interplay of assets. Crafted in secrecy, meant for reverence, our games are windows to unseen worlds of liberty and wonder. Witness the transformation; behold the new dimensions we unveil.
            </div>
            <div
                className="middle"
                style={{backgroundImage:'url(/middle.png)'}}
            >
                <div className="middle-text">
                    <div className="text">
                        Beneath the watchful gaze of the pale moon, Four sovereigns rise, cursed by gods to eternal war.
                    </div>
                    <div className="text text-margin">
                        In realms shadowed by ceaseless conflict, Valiant souls pledge their fealty, Vying for dominion over fractured lands. As five days decree the fate of empires, Only the mightiest grasp immortality’s fleeting whisper.
                    </div>
                    <div className="middle-bottom">
                        <div className="middle-bottom-child">
                            <img className="flower-img" src="flower.png" alt=""/>
                            <div className="flower-text">
                                Enter
                            </div>
                        </div>
                        <div className="middle-bottom-child" onClick={()=>{window.location.href='https://purify-lab.gitbook.io/rise-of-realms/'}}>
                            <img className="flower-img" src="flower.png" alt=""/>
                            <div className="flower-text">
                                Doc
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bottom-title">
                More are under experiment...
            </div>
            <img className="bottom-img" src="bottom.png" alt=""/>
            <div className="middle-bottom-child bottom-desc" onClick={()=>{window.location.href='https://x.com/purifylab_xyz'}}>
                <img className="flower-img" src="flower.png" alt=""/>
                <div className="flower-text">
                    Follow Us
                </div>
                <img className="flower-img" src="flower.png" alt=""/>
            </div>
            <div className="bottom-end">
                Copyright &nbsp;©&nbsp; 2024 Purify Lab All rights reserved.
            </div>
        </div>
    </div>)
  );
}

export default App;
