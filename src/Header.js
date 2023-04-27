import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { BusinessCenter, Home,Chat, SupervisorAccount,Notifications } from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
const Header = () =>{
    return(<div className="header">
    <div className="header__left">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAd7f///8AdLb3+/1hm8lTksRRj8MAcrUAa7K81eeyzOJyps4AcLRXlMUAbrMAaLDc6PKrxuBtocs5i8EKe7mYu9nO4O3i7fXr9Pk7hL2Fr9N8qM+NtNZCicCfwNyoyOAvhqi+AAADoUlEQVR4nO2c25KyOhCFkwYNYAwHEUFl8/5v+aMzjAodg7HosKuyLuYmKfjsnDorZBj/UZYXh5KRqTwUefb7avYDUIACoCNgDPoXFtkDoQNJ+fpBEroB4Zi6ALgpPf4gdM4IeobuhpCR9oGxIOsRCif9YJAsOHMbhFsYWK7cIqicFa6jULCDa4QDI5yVcTkHeC8hlVBSuHt/KnZ5Eif5BVInFKCKig+qdoq+y4r2AXBfy1vqGVQVAX9VsKOdwKIzn+pKuZz2CwemHV1bQDluhd+2KMn6pOpQAs4TqjBAiwehV0sUBvWfjoB3RKNCnbQIJxoCaLTtwAOaloBQS8A5TXYDlzcIO5L1ag0I+NRI2hD6aYEHe5qJAWotwokoy0tjLUIc0SDAXosQUiVwUGkIKrKVUmw0CESd8SbNQpUQ9YS70B5Z0fogkExHA6PN40FeRwRHQb6TUM1zY8QtZT8YBBE7x1ld11l8ZZGj/T8IycqyZFI6NiC8vhL0Erc/3zzgRR8VSwVlc9jsw/2mbZhQFssbqHL/qubZYYDoMCpun7qsiNglqU5D5hNkVR6qjw2KcrpYVs3fQ6DMJsX14NtF7Dot7WeWMPooFCm2XGd/s5PAius7goBOl/edwg8iAQ36jO3vEzTZ5aYvlqF+K9ZHopkdCMAThnBA2KIIfUp1P1x4o7qduym1RJCRPut8VFoUIcqNBDyYyWCHsBmv76jqeTtjO4Srfgv0rNOs5MsOYa6Oc5piWQTezGiKhRHm2EULIwQzwrAwAj+aw7A0wsk9wgybYmmEGS2xOIJ5b/gdQnYs9vtwl+jNGs6NG6NvEKptpG5Jq4jUTl/NeDT6BcI1fcohlc4r4WdT7mKPcH7pZ8B0DLlpnbBGSEY9Xetnx0shBJOxpjSZnPF7BVuE8/S3SbxmbSCwRagRY1SXTpo8VEuEDhntEjtu5OacwRIhRB6rq2uaGOwQcINa42gvg1ChAy3Ft1dYxL5HwL/KQbennBeG6dEOARmSTDsklkHAbfpoaqKuBMF0yOURPIJH8AgewSN4BI/gETyCR/AIHsEjeIT/O8LBCgG1jywRmMLeEfwVl6iLhruZGuPReBogsK+AH16Swh6rNdexbzoS84cMqk3iVyXbJ0NNbeOxCt1BC0THSeXLnHNrkGPB++I3P2tS1+E1KL2c3x8r13CNbwWXGVdwpXMFF1tXcL13DZecV3DVew0X3tdw7X8N//yAO/0XEP8AF8xDFrjLQ2YAAAAASUVORK5CYII=" alt="logo" />
    <div className="header__search">
        {/*SearchIcon */}
        <SearchIcon/>
        <input type="text" />
    </div>
    </div>
    <div className="header__right">
        <HeaderOption Icon={Home} title="Home"/>
        <HeaderOption Icon={SupervisorAccount} title="My Network"/>
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Chat" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://pbs.twimg.com/profile_images/1407321258103128064/NEgu9N-P_400x400.jpg" title="me"/>
    </div>
        </div>);
}

export default Header;