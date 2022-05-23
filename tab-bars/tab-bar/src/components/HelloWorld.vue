<template>
  <div style="width: 600px">
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab> Araç Bilgileri </v-tab>
            <v-tab> Sefer Bilgileri </v-tab>
            <v-tab> Müşteri Bilgileri </v-tab>
            <v-tab> Müşteri Bilgileri... </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <td><h4>Grup:</h4></td>
              <td>vehicle.ZztrnspFirstName + vehicle.ZztrnspLastName</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Plaka:</h4></td>
              <td>vehicle.Plaka</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Sürücü:</h4></td>
              <td>vehicle.Zzsofor1add + vehicle.Zzsofor1addName</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>GSM Telefon No: Kolon yok</h4></td>
              <td>Kolon yok</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Araç Tel No: Kolon yok</h4></td>
              <td>Kolon yok</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Araç Cinsi ve Tanımı:</h4></td>
              <td>vehicle.ResClass + vehicle.NoindivresUnit</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Marka Model:</h4></td>
              <td>vehicle.MarkaModel</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Sahibi:</h4></td>
              <td>
                vehicle.ZztrnspRespadd + ehicle.ZztrnspFirstName +
                ehicle.ZztrnspLastName
              </td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Cihaz No:</h4></td>
              <td>Kolon yok</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Günlük Mesafe:</h4></td>
              <td>Kolon yok</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Akü Voltajı:</h4></td>
              <td>Kolon yok</td>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <td><h4>Sıra No</h4></td>
              <td>Müşteri Sevk Kodu</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Firma</h4></td>
              <td>Firma</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Müşteri Unvanı</h4></td>
              <td>Müşteri Unvanı</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Müşteri Sevk Kodu</h4></td>
              <td>Müşteri Sevk Kodu</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>İl : </h4></td>
              <td>İl</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>İlçe</h4></td>
              <td>İlçe</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Sipariş No</h4></td>
              <td>Sipariş No</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Kredi Durum</h4></td>
              <td>Kredi Durum</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Malzeme No:</h4></td>
              <td>Malzeme No</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Sipariş (KG)</h4></td>
              <td>Sipariş (KG)</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Teslim (KG)</h4></td>
              <td>Teslim (KG)</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Akü Voltajı:</h4></td>
              <td>Akü Voltajı:</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Teslim Tarih</h4></td>
              <td>Teslim Tarih</td>
            </v-card-text>
          </v-card>
          <v-card flat>
            <v-card-text>
              <td><h4>Teslim Saat:</h4></td>
              <td>Teslim Saat</td>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <!-- <v-card class="mx-auto">
            <v-card-text>
              <div v-for="item in customer" :key="item.id">
                {{ customer }}
              </div>
            </v-card-text>
          </v-card> -->

          <v-card flat>
            <v-card-text>
              <td><h4>Kod:</h4></td>
              <td>customer.Musteri</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Bölge:</h4></td>
              <td>
                customer.Transpzone + "\n" + "_" + customer.Name1 + " " +
                customer.Name2
              </td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Adres:</h4></td>
              <td>
                customer.Street + " " + customer.City2 + " " +
                customer.Transpzone
              </td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Adı:</h4></td>
              <td>
                customer.Musteri + "_" + customer.Name1 + " " + customer.Name2
              </td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Sevk Kodu:</h4></td>
              <td>customer.Musteri</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Firma:</h4></td>
              <td>ustomer.Katr6 veri yok</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Arama Dizilimi:</h4></td>
              <td>Mcustomer.Sort1</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Adres:</h4></td>
              <td>customer.City1</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Telefon:</h4></td>
              <td>customer.TelNumber</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Tank Kapasitesi:</h4></td>
              <td>customer.Volum</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Teslimat Üretim Yeri:</h4></td>
              <td>customer.Werks</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Ödeme Koşulu</h4></td>
              <td>customer.Zterm</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Ödeyen:</h4></td>
              <td>customer.Kunrg veri yok</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Bölge:</h4></td>
              <td>customer.Transpzone</td>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <td><h4>Satış Bürosu:</h4></td>
              <td>Kolon ve Veri yok?</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Satış Grubu:</h4></td>
              <td>customer.Vkgrp veri yok</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Son Teslimat Tarihi:</h4></td>
              <td>customer.TesTarihi</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Son Teslimat Araç:</h4></td>
              <td>customer.TesArac</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Son Teslimat Malzeme:</h4></td>
              <td>customer.TesMalzemet</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Son Teslimat Miktar:</h4></td>
              <td>customer.TesMiktarUni</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Son Günlük No:</h4></td>
              <td>customer.VbelnVlLast</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Tüketim Malzemesi:</h4></td>
              <td>Kolon ve veri yok</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Tl / Ton:</h4></td>
              <td>customer.TesMiktar</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Enlem:</h4></td>
              <td>customer.Ypos</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Boylam:</h4></td>
              <td>customer.Xpos</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Tarih:</h4></td>
              <td>Kolon ve veri yok</td>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-text>
              <td><h4>Kaydeden:</h4></td>
              <td>Kolon ve veri yok</td>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isim: "Araç Bilgileri", //deneme
      soyisim: "sanver", //deneme
      customer: "evas",
    };
  },
};
</script>
