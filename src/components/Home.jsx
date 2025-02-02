import React from 'react';
import '../styles/Home.css';
import Navigation from './Navigation';

function Home() {
  return (
    <>
      <Navigation />
      <section id="home" className="home-section">
        <h2>Вітаємо на SafeNature</h2>
        <p>Досліджуйте вплив зміни клімату та приєднуйтесь до нас, щоб змінити ситуацію.</p>
        <div className="map-container">
          <h3>Боротьба зі зміною клімату: Наш спільний виклик</h3>
          <p>Зміна клімату — це одна з найбільших загроз, з якими стикається людство в наш час. Підвищення температури, екстремальні погодні явища, підвищення рівня моря — усе це не просто прогнози, а реальність, що вже сьогодні має вплив на наші життя. Але ми можемо і повинні діяти, щоб зупинити ці зміни, зменшити їх наслідки і захистити нашу планету для майбутніх поколінь.</p>
          <h3>Що ми можемо зробити?</h3>
          <p>Скоротити викиди парникових газів. Використання відновлювальних джерел енергії, зменшення споживання викопних ресурсів і впровадження енергоефективних технологій — це наш шанс зменшити вплив людської діяльності на клімат.</p>
          <p>Захистити та відновити екосистеми. Ліси, океани і водно-болотні угіддя поглинають величезну кількість вуглецю і є критично важливими для балансування клімату. Ми повинні захищати їх від вирубки та забруднення, а також активно відновлювати знищені екосистеми.</p>
          <p>Змінити наше споживання. Перехід до більш стійких моделей споживання та виробництва, такі як зменшення відходів, переробка, обмеження використання одноразових пластикових виробів — все це сприяє скороченню екологічного сліду.</p>
          <p>Підвищити обізнаність та освіту. Кожен із нас може стати агентом змін. Інформування громадян про проблему зміни клімату та активне залучення до змін є необхідним для досягнення колективного успіху.</p>
          <h3>Чому це важливо?</h3>
          <p>Зміна клімату не має кордонів — вона впливає на кожну країну, на кожну людину. Без швидких та рішучих дій глобальні екологічні катастрофи можуть стати невідворотними. Але кожен з нас може зробити свій внесок у захист планети, і саме це дає надію на краще майбутнє.</p>
          <h3>Разом до змін!</h3>
          <p>Нехай кожна маленька дія, будь то сортування сміття, використання енергоефективних приладів або підтримка ініціатив з відновлення природи, стане частиною великої боротьби зі зміною клімату. Лише спільними зусиллями ми зможемо зберегти наш світ для майбутніх поколінь.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
