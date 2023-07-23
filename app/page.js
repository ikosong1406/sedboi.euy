import Image from 'next/image'
import styles from './page.module.css'
import Logo from '../assets/Vector.jpg'
import Homeicon from '../assets/Group 223.jpg'
import Timeicon from '../assets/Group 224.jpg'
import Communityicon from '../assets/Group 225.jpg'
import Discovericon from '../assets/Group 226.jpg'
import Friendsicon from '../assets/Group 227.jpg'
import Bookmarkicon from '../assets/Group 228.jpg'
import Eventsicon from '../assets/Group 229.jpg'
import Disscussionicon from '../assets/Group 230.jpg'
import Sportsicon from '../assets/Group 216.jpg'
import Gamingicon from '../assets/Group 212.jpg'
import Musicicon from '../assets/Group 213.jpg'
import Techicon from '../assets/Group 215.jpg'
import Searchicon from '../assets/Group 6.jpg'
import image1 from '../assets/Group_144.png'
import image2 from '../assets/Group_126.png'
import image3 from '../assets/Group_127.png'
import group77 from '../assets/Group 77.jpg'
import polygon from '../assets/Polygon 1.jpg'
import circle1 from '../assets/Mask Group.jpg'
import circle2 from '../assets/Mask Group2.jpg'
import crown from '../assets/Group 131.jpg'
import ellipse from '../assets/Ellipse 5.jpg'
import ellipse2 from '../assets/Ellipse 51.jpg'
import ellipse3 from '../assets/Ellipse 52.jpg'
import vr from '../assets/Vector 11.jpg'
import messageicon from '../assets/message.png'
import bell from '../assets/Group 46.jpg'
import profile from '../assets/img.jpg'
import arrow from '../assets/Vector 20.jpg'
import cancel from '../assets/Group 32.jpg'
import emoji from '../assets/Group 42.jpg'
import send from '../assets/Group 96.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.div1}>
          <Image
            src={Logo}
            alt="Description of the image"
            className={styles.logo}
          />
          <h1 className={styles.text1}> Sedbio.euy</h1>
        </div>

        <div className={styles.div2}>
          <div className={styles.homediv}>
            <Image src={Homeicon} className={styles.home}/>
            <h2 className={styles.hometext}> Home</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Timeicon} className={styles.time}/>
            <h2 className={styles.timetext}> Timeline</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Communityicon} className={styles.community}/>
            <h2 className={styles.communitytext}> Community</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Discovericon} className={styles.community}/>
            <h2 className={styles.communitytext}> Discover</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Friendsicon} className={styles.community}/>
            <h2 className={styles.communitytext}> Friends</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Bookmarkicon} className={styles.community}/>
            <h2 className={styles.communitytext}> Bookmark</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Eventsicon} className={styles.community}/>
            <h2 className={styles.communitytext}> Events</h2>
          </div>
          <div className={styles.timediv}>
            <Image src={Disscussionicon} className={styles.community}/>
            <h2 className={styles.communitytext}> Discussion</h2>
          </div>
        </div>

        <hr className={styles.hr}/>

        <div className={styles.div3}>
          <h1 className={styles.header1}>Categories</h1>
          <div className={styles.sportsdiv}>
            <Image src={Sportsicon} className={styles.sports}/>
            <h2 className={styles.sportstext}> Sports </h2>
          </div>
          <div className={styles.gamingdiv}>
            <Image src={Gamingicon} className={styles.gaming}/>
            <h2 className={styles.gamingtext}> Gaming </h2>
          </div>
          <div className={styles.gamingdiv}>
            <Image src={Musicicon} className={styles.gaming}/>
            <h2 className={styles.gamingtext}> Music </h2>
          </div>
          <div className={styles.gamingdiv}>
            <Image src={Techicon} className={styles.gaming}/>
            <h2 className={styles.gamingtext}> Tech & Science </h2>
          </div>
        </div>
      </div>





      <div className={styles.section2}>
        <div className={styles.part1}>
          <div>
            <h1 className={styles.part1h1}> Hey, Dustin!</h1>
            <h3 className={styles.part1h3}>Welcome back, nice to see you again!</h3>
          </div>
          <div className={styles.searchdiv}>
            <Image src={Searchicon} className={styles.search}/>
            <h3 className={styles.searchinput}> Search here</h3>
          </div>
        </div>

        <div className={styles.part2}>
          <div className={styles.card}>
            <Image src={image1} className={styles.image1}/>
            <div className={styles.card2}>
              <h3 className={styles.card2text}>Real Wild Cyclist</h3>
              <p className={styles.card2text2}>We are the wildest cyclist.</p>
            </div>
          </div>
          <div className={styles.card1}>
            <Image src={image2} className={styles.image1}/>
            <div className={styles.card2}>
              <h3 className={styles.card2text}>Yoga Forces</h3>
              <p className={styles.card2text2}>Welcome to the biggest...</p>
            </div>
          </div>
          <div className={styles.card3}>
            <Image src={image3} className={styles.image1}/>
            <div className={styles.card2}>
              <h3 className={styles.card2text}>Skater Boys</h3>
              <p className={styles.card2text2}>The best states of skaters.</p>
            </div>
          </div>
        </div>

        <div className={styles.part3}>
          <div className={styles.group1}>
            <h3 className={styles.group1text}> Friends Rank</h3>
            <Image src={group77} className={styles.group77}/>
          </div>
          <div className={styles.group2}>
            <h3 className={styles.group2text1}> Rank </h3>
            <h3 className={styles.group2text2}> Name </h3>
            <h3 className={styles.group2text3}> Category </h3>
            <h3 className={styles.group2text4}> Points </h3>
          </div>
          <div className={styles.group3}>
            <div>
              <Image src={polygon} className={styles.polygon}/>
              <h3 className={styles.polygontext}> 1 </h3>
            </div>
            <div className={styles.name1}>
              <Image src={circle1} className={styles.circle}/>
              <h3 className={styles.name1text}>Mamang Ironmen</h3>
              <Image src={crown} className={styles.crown}/>
            </div>
            <div className={styles.category}>
              <Image src={ellipse} className={styles.ellipse}/>
              <h3 className={styles.categorytext}>Skaters</h3>
            </div>
            <h3 className={styles.points}>2.140</h3>
          </div>
          <hr className={styles.hr1}/>
          <div className={styles.group4}>
            <div>
              <h3 className={styles.polygontext1}> 2 </h3>
            </div>
            <div className={styles.name1}>
              <Image src={circle2} className={styles.circle2}/>
              <h3 className={styles.name1text}>Ariana Grande</h3>
            </div>
            <div className={styles.category1}>
              <Image src={ellipse2} className={styles.ellipse}/>
              <h3 className={styles.categorytext}>Cyclist</h3>
            </div>
            <h3 className={styles.points}>1.814</h3>
          </div>
          <hr className={styles.hr1}/>
          <div className={styles.group4}>
            <div>
              <h3 className={styles.polygontext1}> 3 </h3>
            </div>
            <div className={styles.name1}>
              <Image src={circle1} className={styles.circle2}/>
              <h3 className={styles.name1text}>Trent Alexander Arnold</h3>
            </div>
            <div className={styles.category11}>
              <Image src={ellipse} className={styles.ellipse}/>
              <h3 className={styles.categorytext}>Skaters</h3>
            </div>
            <h3 className={styles.points}>1.620</h3>
          </div>
          <hr className={styles.hr1}/>
          <div className={styles.group4}>
            <div>
              <h3 className={styles.polygontext1}> 4 </h3>
            </div>
            <div className={styles.name1}>
              <Image src={circle2} className={styles.circle2}/>
              <h3 className={styles.name1text}>Shakira Wakawaka</h3>
            </div>
            <div className={styles.category12}>
              <Image src={ellipse3} className={styles.ellipse}/>
              <h3 className={styles.categorytext}>Yogas</h3>
            </div>
            <h3 className={styles.points}>1.280</h3>
          </div>
        </div>
      </div>
    <Image src={vr} className={styles.vr}/>




    <div className={styles.section3}>
      <div className={styles.unit1}>
        <div className={styles.item1}>
          <Image src={messageicon} className={styles.messageicon}/>
          <Image src={bell} className={styles.bell}/>
        </div>
        <div className={styles.item2}>
          <Image src={profile} className={styles.profile}/>
          <h3 className={styles.profilename}>Jamet Roy</h3>
          <Image src={arrow} className={styles.arrow}/>
        </div>
      </div>

      <div className={styles.unit2}>
        <div className={styles.single}>
          <h3 className={styles.single1text}>Chats</h3>
          <p className={styles.single1text1}>14</p>
        </div>

        <div>
          <div className={styles.single}>
            <Image src={circle1} className={styles.messagecircle}/>
            <div>
              <h3 className={styles.messagetext1}>Ironmen</h3>
              <p className={styles.messagetext2}>When will the event be held?</p>
            </div>
            <h3 className={styles.number}>1</h3>
          </div>
          <hr className={styles.hr2}/>
        </div>
        <div>
          <div className={styles.single}>
            <Image src={circle2} className={styles.messagecircle}/>
            <div>
              <h3 className={styles.messagetext1}>Ariana Grande</h3>
              <p className={styles.messagetext2}>Alright then. See you there</p>
            </div>
          </div>
          <hr className={styles.hr2}/>
        </div>
        <div>
          <div className={styles.single}>
            <Image src={circle1} className={styles.messagecircle}/>
            <div>
              <h3 className={styles.messagetext1}>Ariana Grande</h3>
              <p className={styles.messagetext2}>Come on join to my party!</p>
            </div>
          </div>
          <hr className={styles.hr2}/>
        </div>
        <div>
          <div className={styles.single}>
            <Image src={circle2} className={styles.messagecircle}/>
            <div>
              <h3 className={styles.messagetext1}>Ariana Grande</h3>
              <p className={styles.messagetext2}>After that you can see me</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.unit3}>
        <div className={styles.top}>
          <h3 className={styles.toptext}>Ironmen</h3>
          <Image src={cancel} className={styles.cancel}/>
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.today}> Today </h3>
          <div className={styles.bottomdiv}>
            <h3 className={styles.bottomdivtext1}>When will the event be held?</h3>
            <p className={styles.bottomdivtext2}>10:22 am</p>
          </div>
          <div className={styles.bottomdiv}>
            <p className={styles.bottomdivtext3}>10:22 am</p>
            <h3 className={styles.bottomdivtext4}>When will the event be held?</h3>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.messagearea}>
            <h3 className={styles.messageareatext}>Type here...</h3>
            <Image src={emoji} className={styles.messageareaimg}/>
          </div>
          <Image src={send} className={styles.send}/>
        </div>
      </div>
    </div>
    </main>
  )
}