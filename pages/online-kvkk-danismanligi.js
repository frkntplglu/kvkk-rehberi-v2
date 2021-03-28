import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Danışmanlığı Hizmeti – KVKK Rehberi</title>
      </Head>
      <PageContent pageTitle="KVKK Paketleri">
        <p class="text-center">
          Kişisel Verilerin Korunması Kanunu ve tali mevzuat kapsamında Rasyotek olarak sağladığımız danışmanlık hizmetlerimizi “Teknolojik İnsan” mottomuza uygun hâle getirerek dijitale taşıdık.
        </p>
        <p class="text-center">
          Uzman avukatlarımız ve IT ekiplerimiz tarafından şirketinize özel hazırlanacak dokümantasyon ve online danışmanlık hizmetlerimize ilişkin alternatif proje süreçlerimiz hakkında detaylı bilgi almak için tarafımıza ulaşabilirsiniz.
        </p>
        <div class="package-form">

<form action="/" method="post" id="package-form" novalidate="novalidate">
<div class="form-group"><input type="text" id="name" name="Name" class="form-control" placeholder="Ad Soyad" /></div>
<div class="form-group"><input type="email" id="email" name="Email" class="form-control" placeholder="E-posta" /></div>
<div class="form-group"><input type="text" id="phone" name="Phone" class="form-control" placeholder="Telefon" /></div>
<div class="form-group">
<select name="Package" id="package-select" class="form-control">
<option value="0" disabled="" selected="">Paket</option>
<option value="1">Paket 1</option>
<option value="2">Paket 2</option>
<option value="3">Paket 3</option>
<option value="4">Paket 4</option>
<option value="5">Paket 5</option>
</select>
</div>
<div class="form-group">
<textarea type="text" id="message" name="Note" rows="2" class="form-control md-textarea" placeholder="Mesajınız"></textarea>
</div>
<div class="checkboxRow">
<input type="checkbox" name="AydinlatmaMetni" id="aydinlatmaMetni" value="false" />
<label> <a target="_blank" href="/aydinlatma-metni">Aydınlatma metnini</a> okudum </label>
</div>
<button class="package-btn" id="package-form-submit">Formu Gönder</button>
</form>
</div>
      </PageContent>
    </Layout>
  );
}

export default Page;
