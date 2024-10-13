//settingan untuk angularjs
const WEB="http://localhost/antrianfarmasi/";
//setting url websocket
const socket = new WebSocket('ws://localhost:800');

function pengaturan() {
//=========================================================================
    // Menampilkan data rumah sakit
    $(document).ready(function() { 
      $.ajax({
          url: 'app/antrian.php?p=pengaturan',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              var email= $('#email');
              email.html(data.email);
  
              var namars= $('#namars');
              namars.html(data.nama_instansi);
  
              var text= $('#text');
              text.html(data.text);
          }
          
      });
  });


      }


$(document).ready(function() {
        pengaturan();
});  

$(document).ready(function() {
  Suara();
});


//========================================================================
//fungsi websocket


socket.onmessage = function(event) {
  try {
    const data = JSON.parse(event.data);
    if (data && data.type === 'panggil') {
		
		
		var audio = document.getElementById("myAudio");
                audio.onended = function() {
                  // Callback yang akan dijalankan setelah audio selesai
				  responsiveVoice.speak("Atas nama " + data.nama + " Nomor Antrian " + data.nomor + ", silahkan menuju " + data.poli, "Indonesian Female", {
					pitch: 1,
					rate: 0.9,
					volume: 1
				  });
                };
                // Memainkan suara notifikasi
                audio.play();
				
	
      // Mengatur nilai elemen dengan id "nomor" menjadi nilai dari properti data.nomor 
      document.getElementById("nomormodal").innerText = data.nomor; 
      document.getElementById("polimodal").innerText = data.poli;
	  
	  
	  
// reload data
$(document).ready(function() {
  Suara();
});

      //menampilkan modal
      $(document).ready(function() {
        $('#exampleModal').modal('show'); // Menampilkan modal saat halaman dimuat
        // Menutup modal setelah 3 detik
        setTimeout(function() {
          $('#exampleModal').modal('hide');
        }, 10000); // 10000 milidetik = 10 detik
      });
    } else if (data && data.type === 'reloadDisplay') {
      location.reload();
    }
  } catch (error) {
    console.error('Gagal memproses pesan WebSocket:', error);
  }
};
//========================================================================
//=========================================================================
      // Fungsi pemanggil
      function Suara() {

   
//=======================================================================
    // Fungsi display nomor

    $.ajax({
      url: "app/antrian.php?p=nomor",
      type: "GET",
      dataType: "json",
      success: function(data) {
          var nomorAntrian = $("#nomor");
          nomorAntrian.empty(); 
          // Mengosongkan data sebelum menambahkan yang baru
          // Loop melalui data dan menambahkannya ke tampilan
          $.each(data, function(index, item) {
              var antrian = $("<br><center class='h4'>" + item.nm_pasien +  "<br><b class='h3'>( " + item.no_reg + " )</b></center>"); 
              nomorAntrian.append(antrian);

          });
      }, 
  });
//=========================================================================


//=======================================================================
    // Fungsi non racikan
  // Fungsi racikan
  $.ajax({
    url: "app/antrian.php?p=nonracikan",
    type: "GET",
    dataType: "json",
    success: function(data) {
        var NonRacikan = $("#nonracikan");
        NonRacikan.empty(); // Mengosongkan data sebelum menambahkan yang baru

        if (data.length > 0) {
            // Membuat tabel HTML hanya jika ada data yang diterima
            var table = $("<table class='table table-sm'></table>");
            var thead = $("<thead></thead>").appendTo(table);
            var tbody = $("<tbody></tbody>").appendTo(table);

            // Membuat baris judul tabel
            var headerRow = $("<tr></tr>").appendTo(thead);
            headerRow.append("<th>Antrian</th>");
            headerRow.append("<th>Nama Pasien</th>");
            headerRow.append("<th>Jam Peresepan</th>"); 
            headerRow.append("<th>Jam Validasi</th>"); 

            // Loop melalui data dan menambahkannya ke tabel
            $.each(data, function(index, item) {
                var row = $("<tr class=''></tr>");
                row.append("<td>" + item.no_resep + "</td>");
                row.append("<td>" + item.nm_pasien + "</td>");
                row.append("<td>" + item.jam_peresepan + "</td>"); 
                row.append("<td>" + item.jam_validasi + "</td>"); 
                tbody.append(row);
            });

            NonRacikan.append(table);
        } else {
            // Tidak ada data yang diterima, tampilkan pesan atau ambil tindakan lain yang sesuai
            NonRacikan.append("<center>Tidak ada antrian tersedia.</center>");
        }
    },
    error: function() {
        // Menangani kesalahan jika terjadi saat mengambil data
        var NonRacikan = $("#nonracikan");
        NonRacikan.empty();
        NonRacikan.append("<p>Terjadi kesalahan saat mengambil data.</p>");
    }
});

  
//=========================================================================
//=======================================================================
    // Fungsi racikan
    $.ajax({
      url: "app/antrian.php?p=racikan",
      type: "GET",
      dataType: "json",
      success: function(data) {
          var NonRacikan = $("#racikan");
          NonRacikan.empty(); // Mengosongkan data sebelum menambahkan yang baru
  
          if (data.length > 0) {
              // Membuat tabel HTML hanya jika ada data yang diterima
              var table = $("<table class='table table-sm'></table>");
              var thead = $("<thead></thead>").appendTo(table);
              var tbody = $("<tbody></tbody>").appendTo(table);
  
              // Membuat baris judul tabel
              var headerRow = $("<tr></tr>").appendTo(thead);
              headerRow.append("<th>Antrian</th>");
              headerRow.append("<th>Nama Pasien</th>");
              headerRow.append("<th>Jam Peresepan</th>"); 
              headerRow.append("<th>Jam Validasi</th>"); 
  
              // Loop melalui data dan menambahkannya ke tabel
              $.each(data, function(index, item) {
                  var row = $("<tr class=''></tr>");
                  row.append("<td>" + item.no_resep + "</td>");
                  row.append("<td>" + item.nm_pasien + "</td>");
                  row.append("<td>" + item.jam_peresepan + "</td>"); 
                  row.append("<td>" + item.jam_validasi + "</td>"); 
                  tbody.append(row);
              });
  
              NonRacikan.append(table);
          } else {
              // Tidak ada data yang diterima, tampilkan pesan atau ambil tindakan lain yang sesuai
              NonRacikan.append("<center>Tidak ada antrian tersedia.</center>");
          }
      },
      error: function() {
          // Menangani kesalahan jika terjadi saat mengambil data
          var NonRacikan = $("#racikan");
          NonRacikan.empty();
          NonRacikan.append("<p>Terjadi kesalahan saat mengambil data.</p>");
      }
  });
  
  
//=========================================================================



}  
 
   
   //=======================================================================
   

  //==========membuat jam=============
   function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Format waktu dengan tambahkan "0" di depan angka jika kurang dari 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = ""+ hours + ":" + minutes + ":" + seconds;
  
    // Update elemen HTML dengan waktu yang telah diformat
    document.getElementById("clock").innerHTML = timeString;
  }
  
  // Panggil fungsi updateClock setiap detik
  setInterval(updateClock, 1000);
   
   
  
  
   