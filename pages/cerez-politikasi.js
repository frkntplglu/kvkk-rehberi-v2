import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import Accordion from "../components/Accordion";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Çerez Politikası</title>
      </Head>
      <PageContent pageTitle="Çerez Politikası">
        <h1 className="text-center">ÇEREZ POLİTİKASI</h1>
        <Accordion title="Amaç ve Veri Sorumlusunun Kimliği" open={true}>
          <p>Rasyotek İnsan Kaynakları Bilişim A.Ş. (“Rasyotek”) olarak web sitemizde (www.rasyotek.com.tr) kullanılmakta olan çerez (cookie) türleri, çerezlerin neden kullanıldıkları ve bu çerezlerin yönetilmesi hakkında 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamındaki yükümlülüklere uymak amacıyla bilgilendirmede bulunulmuştur.</p>  
          <p>İşbu Çerez Politikasında, web sitesinin ziyaretçilerine daha iyi bir hizmet sağlanması ve işlevsel bir çevrimiçi ortam sağlamak adına kullanılan çerezler ziyaretçilere açıklanmış, KVKK’ya uygun olarak elde edilen kişisel verilerin işlenmesinin nasıl olduğu ve kullanıcının kanuni hak ve yetkileri belirtilmiştir.</p>  
        </Accordion>
        <Accordion title="Çerez Nedir?" open={true}>
          <p>Çerez, bir web sitesi ziyaret edildiğinde sabit sürücüde veya tarayıcı klasöründe depolanan metin dosyasıdır. Çerezler aracılığı ile web sitesi ziyaretçilerine sunulan hizmetin daha hızlı ve işlevsel olması amaçlanmaktadır. Web sitesi ziyaretçisine göre kişiselleştirilmiş bir çevrimiçi ortamın sağlanması çerezler aracılığı ile sağlanmaktadır. Ziyaretçilerimiz çerez kullanımına ilişkin tercihlerini belirleyebilmekte ve değiştirebilmektedir. Aynı şekilde ziyaretçi çerezlerin silinmesini talep etme hakkına da sahiptir.</p>  
        </Accordion>
        <Accordion title="Çerez Türleri" open={true}>
          <p>Çerezler; hizmet ettiği amaca göre, verinin saklı tutulduğu süreye göre, oluştukları kaynaklarına göre çerezler olarak sınıflandırılabilmektedir.</p>  
        </Accordion>
        <Accordion title="Amaçlarına Göre Çerezler" open={true}>
          <p>Çerezin kullanılma amacına göre yapılan bu sınıflandırmada kesin gerekli çerezler, tercih çerezleri, istatistik çerezleri ve pazarlama çerezleri açıklanmıştır.</p>  
        </Accordion>
        <Accordion title="Kesin Gerekli Çerezler" open={true}>
          <p>Kesin gerekli çerezler, web sitesinde gezinmek ve sitenin güvenli alanlarına erişim gibi özelliklerin kullanılması için gerekli olan çerezlerdir. E-ticaret mağazalarında çevrimiçi alışveriş yapılırken alım satım işleminin sona erdirilebilmesi için kullanıcının tercih ettiği ögelerin bir sonraki adım için saklı tutulması gerekmektedir. E-ticaret sitelerinde ögelerin alışveriş sepetinde tutulmasına izin veren çerezler, kesin gerekli çerezlere örnek olarak sayılabilir. Kesin gerekli çerezler, genel olarak birinci taraf oturum çerezleridirler. Bu çerezler için onay alınması gerekmese de çerezin neden kullanıldığı ve çerezin gerekliliği kullanıcıya açıklanmalıdır.</p>  
        </Accordion>
        <Accordion title="Tercih Çerezleri" open={true}>
          <p>Web sitesinde geçmişte yapılan seçimlerin (kullanıcı adı bilgisi, parola bilgisi, hangi dilin tercih edildiği vb.) ne olduğunu hatırlamasını sağlar. Web sitesine otomatik girişi sağlayan tercih çerezleri, işlevsel çerezler olarak da adlandırılmaktadır.</p>
        </Accordion>
        <Accordion title="İstatistik Çerezleri" open={true}>
          <p>Performans çerezleri olarak da bilinen istatistik çerezleri, web sitesinin kullanımına ilişkin anonim, istatistiksel veri sağlayan çerezlerdir. İstatistik çerezleri ile kullanıcının web sitesini nasıl kullandığı, ziyaret ettiği sayfalar, tıkladığı bağlantılar depolanabilmektedir. Anonim hale getirilen istatistik çerezleri, web sitesi kullanıcısını tanımlamak için kullanılmamaktadır. Bu çerezlerin amacı, web sitesini daha işlevsel hale getirmektir.</p>
        </Accordion>
        <Accordion title="Pazarlama Çerezleri" open={true}>
          <p>Pazarlama çerezleri, reklam verenlerin kullanıcının ilgisine göre reklamlar sunmasını sağlayan çerezlerdir. Web sitesi kullanıcısının karşılaştığı reklamların istatistiksel verileri, pazarlama çerezleri yoluyla elde edilen veriler, diğer kuruluşlarla veya reklam verenlerle paylaşılabilir. Bunlar kalıcı olarak depolanabilen çerezlerdir.</p>
        </Accordion>
        <Accordion title="Depolanma Sürelerine Göre Çerezler" open={true}>
          <p>Çerezler, verinin elde tutulma süresine göre oturum çerezleri ve kalıcı çerezler olarak ikiye ayrılmaktadır. Oturum çerezlerinin kalıcı çerezlerden farkı geçici, anlık veri bilgisi sağlamasıdır.</p>
        </Accordion>
        <Accordion title="Oturum Çerezleri" open={true}>
          <p>Oturum çerezleri, kullanıcının tarayıcıyı kapatması veya oturumun sona ermesi süresine kadar depolanabilecek veriler sağlamaktadır. Kısa süreli çerezlerdir.</p>
        </Accordion>
        <Accordion title="Kalıcı Çerezler" open={true}>
          <p>Kalıcı çerezler, çerezin kullanıcı tarafından silinme tarihine kadar veya çerez için belirli son kullanım tarihine kadar sürücüde yer alan çerezlerdir. Kalıcı çerezlerin kodlarında değişken süreli, yazılı bir son kullanma tarihi vardır. E-Gizlilik Direktifine göre kalıcı çerezlerin 12 aydan daha uzun sürmemesi gerekmektedir.</p>
        </Accordion>
        <Accordion title="Kaynaklarına Göre Çerezler" open={true}>
          <p><b>Birinci Taraf Çerezleri</b></p>
          <p>Adından da anlaşılacağı gibi, birinci taraf çerezleri doğrudan ziyaret edilen web sitesi tarafından cihaza yerleştirilmektedir.</p>
          <p><b>Üçüncü Taraf Çerezleri</b></p>
          <p>Üçüncü taraf çerezleri, ziyaret edilen web sitesi tarafından değil, reklam veren veya analitik sistem gibi üçüncü bir tarafça cihaza yerleştirilen çerezlerdir.</p>
        </Accordion>
        <Accordion title="Web Sitemizde Kullanılan Çerezler" open={true}>
          <div className="table-responsive">
            <table className="page-table text-center">
              <thead>
                  <tr>
                    <th>Servis Sağlayıcı</th>
                    <th>Çerez İsmi</th>
                    <th>Çerez Amacı</th>
                    <th>Çerez Tipi</th>
                    <th>Çerez Süresü</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Google</td>
                    <td>_ga</td>
                    <td>Bu tanımlama bilgisi, Google Analytics tarafından kullanıcı ziyaretinin amacını değerlendirmek için kullanılır ve web sitesi yöneticileri için web sitesi etkinliğiyle ilgili raporlar oluşturur ve müşteri deneyimini iyileştirmeyi amaçlar.</td>
                    <td>Persistent Cookie</td>
                    <td>2 Yıl</td>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>_gid</td>
                    <td>Bu tanımlama bilgisi, Google Analytics tarafından kullanıcı ziyaretinin amacını değerlendirmek için kullanılır ve web sitesi yöneticileri için web sitesi etkinliğiyle ilgili raporlar oluşturur ve müşteri deneyimini iyileştirmeyi amaçlar.</td>
                    <td>Persistent</td>
                    <td>1 Gün</td>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>_gat</td>
                    <td>Bu tanımlama bilgisi, Google Analytics tarafından kullanıcı ziyaretinin amacını değerlendirmek için kullanılır ve web sitesi yöneticileri için web sitesi etkinliğiyle ilgili raporlar oluşturur ve müşteri deneyimini iyileştirmeyi amaçlar.</td>
                    <td>Temporary</td>
                    <td>1 Dakika</td>
                  </tr>
                  <tr>
                    <td>Hotjar</td>
                    <td>_hjid</td>
                    <td>İstatiksel anlamda kullanıcıya bir kimlik tanımlamaktadır.</td>
                    <td>Persistent Cookie</td>
                    <td>1 Yıl</td>
                  </tr>
                  <tr>
                    <td>Hotjar</td>
                    <td>_hjIncludedInSample</td>
                    <td>Kullanıcının istatistiksel olarak bir sıralamada tutulmasını sağlamaktadır.</td>
                    <td>Persistent Cookie</td>
                    <td>1 Yıl</td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td>_fbp</td>
                    <td>Bu tanımlama bilgisi, Facebook'a kaydolduklarında web sitemizi veya Facebook Reklamının desteklediği dijital platformu ziyaret eden kişilere reklam yapmamıza yardımcı olur.</td>
                    <td>Session Cookie</td>
                    <td>En Fazla 1 Aylık</td>
                  </tr>
                  <tr>
                    <td>Rasyotek</td>
                    <td>cookieCompliancyCookie</td>
                    <td>Çerez politikasının kabul edilip edilmediğini tutar.</td>
                    <td>Persistent Cookie</td>
                    <td>3 Ay</td>
                  </tr>
                  <tr>
                    <td>Rasyotek</td>
                    <td>IdentiyCookie</td>
                    <td>Kullanıcı oturum açtığı taktirde rol ve yetkilerini, ihtiyaç doğrultusunda kontrol etmek amacıyla, bu değer üzerinde saklı tutar.</td>
                    <td>Persistent Cookie</td>
                    <td>1 Yıl</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </Accordion>
        <Accordion title="Gizlilik ve Çerez Yönetimi" open={true}>
          <p>Web sitesini kullanan kullanıcılarımıza siteye girişlerinde kullanım kalitesini arttırmak, site kullanımını kolaylaştırarak kullanımdan alınan faydayı arttırmak ve web sitemizi geliştirip güvenlik açıkları ihtimalini önlemek gibi amaçlarla kullanıcıların web sitesine girdiklerinde ziyaret ettikleri bölümlere ilişkin verileri kullanıcılarımızın yasal haklarını gözeterek KVKK kapsamında işliyoruz. Kullanıcılar, siteye giriş yaptıkları andan başlayarak, iletişim formunu kullanmaları da dahil ayrılmalarıyla son bulan süreçte, buraya kadar bahsedilen verilerin işlendiği konusunda bilgilendirildiklerini ve bu kapsamda RASYOTEK tarafından gerçekleştirilecek veri işleme sürecine rızalarının olduğunu kabul ve beyan ederler. Kullanıcılar, web sitelerinin çerezler aracılığıyla kişisel verilerini işlemesini/depolamasını engelleyebilirler. Ayrıca, daha önceden internet tarayıcısındaki çerezleri silebilmektedirler.</p>
          <p>Kullanıcılar çerez kullanımını çeşitli yollardan engellemeyebilmektedirler. Kullanıcı olarak eğer çerez kullanımını önlemek istiyorsanız;</p>
          <p>Chrome tarayıcılarda ayarlar &#62; gelişmiş ayarları göster &#62; gizlilik &#62; içerik ayarları &#62; çerezler &#62; istisnaları yönet yolundan veya chrome://settings/cookies adresinden tercih edebilirsiniz. (http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647)</p>
          <p>Internet Explorer &#62; araçlar düğmesini ve ardından internet seçeneklerini seçin &#62; gizlilik sekmesine tıklayın &#62; ayarlar bölümünden tüm tanımlama bilgilerini engellemek için kaydırıcıyı yukarı hareket ettirin ya da hepsine izin vermek için aşağı hareket ettirerek tamam'ı seçin. (https://support.microsoft.com/en-us/help/17442/windows-internet-explorer- delete-manage-cookies)</p>
          <p>Firefox &#62; tarayıcılarda seçenekler &#62; gizlilik &#62; geçmiş &#62; geçmiş için özel ayarları kullansın &#62; sitelerden çerezleri kabul et &#62; ayrıcalıklar yolundan veya about: preferences - privacy adresinden çerezleri sitem için devre dışı bırakabilirsiniz. (http://support.mozilla.com/en-US/kb/Cookies)</p>
          <p>iOS Safari &#62; telefonunuzda ayarlar simgesine dokunun &#62; safari çerezleri engelle her zaman engelle &#62; 5 dakika bekleyin ve uygulamayı açın. diğer tarayıcılar için, tarayıcınızın ayarlar bölümünden veya yardım bölümünden ulaşabilirsiniz. (https://support.apple.com/kb/ph19214?locale=tr_TR)</p>
          <p>Internet Explorer &#62; https://support.microsoft.com/en-us/help/17442/windows-internet-explorer- delete-manage-cookies</p>

        </Accordion>
        <Accordion title="Kullanıcının Verilere Erişim Hakkı ve Talepleri" open={true}>
          <p>Kullanıcılar, KVKK tarafından kendilerine tanınan hak ve yetkiler çerçevesinde, RASYOTEK’ e başvurarak kendileriyle ilgili:</p>
          <ul>
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
            <li>İlgili mevzuatta öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>İlgili mevzuat uyarınca yapılan düzeltme, silme ve yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme haklarına sahiptirler.</li>
          </ul>
          <p>Kişisel veri sahibi kullanıcılar, KVK Kanunu uyarınca RASYOTEK’ e yukarıdaki taleplerine ilişkin olarak Başvuru Formu vasıtasıyla başvurabilir. Başvurular, KVKK’ nın 13’ üncü maddesinin 2’ inci fıkrası gereğince, talebin niteliğine göre talebinizin bizlere ulaştığı tarihten itibaren otuz gün içinde cevaplandırılır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kurulca belirlenen tarifedeki ücret RASYOTEK tarafından veri sahibinden alınabilir.</p>
          <p>KVKK uyarınca RASYOTEK talebi kabul edebilir veya gerekçesini açıklayarak reddedebilir ve cevabını ilgili kişiye yazılı olarak veya elektronik ortamda bildirir. Başvuruda yer alan talebin kabul edilmesi hâlinde RASYOTEK tarafından gereği yerine getirilecektir. KVKK uyarınca başvurunun veri sorumlusunun hatasından kaynaklanması hâlinde alınan ücret ilgiliye iade edilir.</p>
          <p>Kullanıcı KVKK uyarınca RASYOTEK’ e sağlamış olduğu bilginin tam, doğru ve güncel olduğu taahhüt eder ve bu taahhüde aykırılık oluşturacak bir durumun varlığı halinde tüm sorumluluk kullanıcı/ziyaretçilere ait olacak olup, RASYOTEK’ in herhangi bir sorumluluğu bulunmayacaktır.</p>
        </Accordion>
      </PageContent>
    </Layout>
  );
}

export default Page;
