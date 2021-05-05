import StyleAnimBattle from './StyleAnimBattle';

function AnimBattle() {
  const pop1 = '/Images/anim/pop1.png';
  const pop2 = '/Images/anim/pop2.png';
  const pop3 = '/Images/anim/pop3.png';
  const pop4 = '/Images/anim/pop4.png';
  const pop5 = '/Images/anim/pop5.png';
  const pop6 = '/Images/anim/pop6.png';
  const pop7 = '/Images/anim/pop7.png';
  const pop8 = '/Images/anim/pop8.png';

  return (
    <StyleAnimBattle>
      <img src={pop1} alt="" className="pop1" />
      <img src={pop2} alt="" className="pop2" />
      <img src={pop3} alt="" className="pop3" />
      <img src={pop4} alt="" className="pop4" />
      <img src={pop5} alt="" className="pop5" />
      <img src={pop6} alt="" className="pop6" />
      <img src={pop7} alt="" className="pop7" />
      <img src={pop8} alt="" className="pop8" />
    </StyleAnimBattle>
  );
}

export default AnimBattle;
