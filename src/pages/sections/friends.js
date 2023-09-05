import React from "react";
import style from "./friends.module.css";

const Friends = () =>{
    let amountoffriends = 32;

    return(
        <section id={style["friends"]}>

            <h2>Friends 
                <span>({amountoffriends})</span>
            </h2>

            <ul id={style["friends-categories"]}>
                <li><button className={style["current"]}>All</button></li>
                <li><button>Online</button></li>
                <li><button>Starred</button></li>

            </ul>

            <ul id={style["friends-list"]}> 

                <Friend
                status="Playing"
                headshot="https://tr.rbxcdn.com/cc94269d588e2c14dd97bd598b67972f/150/150/AvatarHeadshot/Png"
                name="MapleAtMorning"
                link="google.com"
                activity="eat drywall"
                />

                <Friend
                status="Playing"
                headshot="https://tr.rbxcdn.com/37a595ce091a394f51fbaea11ce49b82/150/150/AvatarHeadshot/Png"
                name="Empire"
                link="google.com"
                activity="[ALPHA] The Scorch"
                />

                <Friend
                status="Playing"
                headshot="https://tr.rbxcdn.com/79ab362692dc467029dfc714a607e7c0/150/150/AvatarHeadshot/Png"
                name="Sox"
                link="google.com"
                activity="booger simulator"
                />

                <Friend
                status="Developing"
                headshot="https://tr.rbxcdn.com/c87b00c9cb51d3dc42271ba42fef6aba/150/150/AvatarHeadshot/Png"
                name="Async"
                link="google.com"
                activity="test_world1"
                />
                
                <Friend
                status="Developing"
                headshot="https://tr.rbxcdn.com/355faeb61fccbc1d4af3291dbf0ce78e/150/150/AvatarHeadshot/Png"
                name="Silentu"
                link="google.com"
                activity="[ALPHA] The Scorch"
                />

                <Friend
                status="Online"
                headshot="https://tr.rbxcdn.com/96e323f546e613b63ef9d7211eef48da/150/150/AvatarHeadshot/Png"
                name="Nura"
                link="google.com"
                activity=""
                />

                <Friend
                status="Online"
                headshot="https://tr.rbxcdn.com/ccf999660bc35b2a9d956afa5dfb4775/150/150/AvatarHeadshot/Png"
                name="Doggo"
                link="google.com"
                activity=""
                />
                
                <Friend
                status="Online"
                headshot="https://tr.rbxcdn.com/a0d923bbee6ed5ebb980f90c6b1900d1/150/150/AvatarHeadshot/Png"
                name="Jacob"
                link="google.com"
                activity=""
                />

                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/b765646a3c44006e89237d8c1faf4619/150/150/AvatarHeadshot/Png"
                name="Renee"
                link="google.com"
                activity=""
                />
                
                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/1b44ae1e8d8d61e07453e967b841e1f2/150/150/AvatarHeadshot/Png"
                name="Willow"
                link="google.com"
                activity=""
                />

                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/7fe23178651f5f85a6e526c5acf9ba2b/150/150/AvatarHeadshot/Png"
                name="Lucy"
                link="google.com"
                activity=""
                />
                
                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/79f0ff47955b603f0b58b03df540484f/150/150/AvatarHeadshot/Png"
                name="Zen"
                link="google.com"
                activity=""
                />

                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/1d793289e70e8b4a7ca50dc16e00b0e5/150/150/AvatarHeadshot/Png"
                name="Typhoon"
                link="google.com"
                activity=""
                />

            </ul>

        </section>
    );
};

const Friend = ({link, status, headshot, name, activity}) =>{
    return(
        <li>
            <a href={link}>
                
                <span className={style[status]}> {/*Work around to ::after not working on imgs*/}
                    
                    <img src={headshot} alt={name}/>

                </span>

                <div>

                    <p className={style["username"]}>
                        <i>@</i>{name}
                        {/*Could be a greyed out star to add the star feature. Next to the name*/}
                    </p>

                    {/*if status/activity is offline this should be
                    invisible*/}
                    <p className={style["activity"]}>
                        <i>{status}: </i>{activity}
                    </p>

                </div>

            </a>
        </li>
    );
};

export default Friends;