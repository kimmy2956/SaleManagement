<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>คำนวณราคาประตูม้วนมือดึง/สปริง</title>
  <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
  <style>
    :root {
      --primary: #0066cc;
      --bg-light: #f9fafc;
      --box-bg: #ffffff;
      --border: #e0e0e0;
    }
    body {
      font-family: 'Kanit', sans-serif;
      margin: 0;
      background-color: var(--bg-light);
      color: #333;
      padding: 0;
    }
    .container {
      max-width: 700px;
      margin: 30px auto;
      padding: 30px;
      background: var(--box-bg);
      border-radius: 20px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }
    h2 {
      text-align: center;
      color: var(--primary);
      margin-bottom: 25px;
    }
    label {
      display: block;
      margin-top: 15px;
      font-weight: 600;
    }
    input, select {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 10px;
      margin-top: 5px;
      font-size: 1rem;
      box-sizing: border-box;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    .col {
      flex: 1;
      min-width: 45%;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 15px;
      font-size: 1rem;
      cursor: pointer;
      user-select: none;
    }
    .checkbox-label input[type="checkbox"] {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .hidden {
      display: none;
    }
    button {
      margin-top: 25px;
      width: 100%;
      background: var(--primary);
      color: #fff;
      padding: 14px;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 0.3s ease;
    }
    button:hover {
      background: #005bb5;
    }
    .result {
      margin-top: 25px;
      background: #eafaf1;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid #d0eadf;
      color: #006400;
      font-size: 1.1rem;
      white-space: pre-line;
    }
    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      color: #777;
    }
    @media (max-width: 600px) {
      .row {
        flex-direction: column;
      }
      .col {
        min-width: 100%;
      }
    }
    /* Modal styles */
    #modalOverlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    #modalContent {
      background: white;
      padding: 20px 30px;
      border-radius: 12px;
      max-width: 320px;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    }
    #qrcode {
      margin: 15px auto;
      width: 150px;
      height: 150px;
    }
    #modalContent button {
      margin-top: 15px;
      background: var(--primary);
      border: none;
      color: white;
      padding: 10px 20px;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    #modalContent button:hover {
      background: #004a99;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>คำนวณราคาประตูม้วนมือดึง/สปริง</h2>

    <div class="row">
      <div class="col">
        <label for="width">ความกว้างหลังราง (เมตร):</label>
        <input type="number" id="width" step="0.01" min="0" />
      </div>
      <div class="col">
        <label for="panelType">ประเภทบานประตู:</label>
        <select id="panelType">
          <option value="1">บานเต็ม</option>
          <option value="2">แบ่ง 2 บาน</option>
          <option value="3">แบ่ง 3 บาน</option>
        </select>
      </div>
    </div>

    <label for="height">ความสูงรวมกล่อง (เมตร):</label>
    <input type="number" id="height" step="0.01" min="0" />

    <label for="doorType">ประเภทใบประตู:</label>
    <select id="doorType">
      <option value="ลอนเดี่ยว">ลอนเดี่ยว</option>
      <option value="ลอนคู่">ลอนคู่</option>
      <option value="ลอนเดี่ยวใบใหญ่">ลอนเดี่ยวใบใหญ่</option>
    </select>

    <label for="thickness">ความหนา (มม.):</label>
    <select id="thickness"></select>

    <label class="checkbox-label" for="useBox">
      <input type="checkbox" id="useBox" onchange="toggleBoxOptions()" />
      ใช้กล่องหุ้มเพลา
    </label>

    <div id="boxOptions" class="hidden">
      <label for="boxSize">ขนาดกล่องหุ้มเพลา:</label>
      <select id="boxSize" onchange="updateBoxTypes()">
        <option value="30x35">30 x 35</option>
        <option value="33x40">33 x 40</option>
      </select>

      <label for="boxType">รูปแบบกล่องหุ้มเพลา:</label>
      <select id="boxType"></select>
    </div>

    <label class="checkbox-label" for="useSpring">
      <input type="checkbox" id="useSpring" />
      ใช้จานสปริงตลับลูกปืน
    </label>

    <label class="checkbox-label" for="useMailbox">
      <input type="checkbox" id="useMailbox" />
      ใช้ช่องใส่จดหมาย
    </label>

    <button onclick="calculate()">คำนวณราคา</button>

    <div class="result" id="result"></div>
  </div>

  <footer>
    ฝ่ายขายบริษัท บางกอกเพรสพาร์ทส จำกัด © Thanyarat Phapachiratsakul
  </footer>

  <!-- Modal Popup -->
  <div id="modalOverlay">
    <div id="modalContent">
      <p>ราคาดังกล่าวเป็นการคำนวณคร่าวๆ หากต้องการสอบถามราคาอย่างละเอียดสามารถแอดไลน์ได้ที่นี่</p>
      <div id="qrcode"></div>
      <button onclick="closeModal()">ปิด</button>
    </div>
  </div>

  <!-- QRCode.js library -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<script>
  const priceMap = {
    'ลอนเดี่ยว': {'0.5': 869, '0.6': 979, '0.7': 1089},
    'ลอนคู่': {'0.5': 913, '0.7': 1133},
    'ลอนเดี่ยวใบใหญ่': {'0.8': 1958, '1.0': 2398, '1.2': 2827, '0.7': 1133}
  };

  const boxPriceMap = {
    '30x35': {
      '2ด้านตัวแอล': 296,
      '3ด้านตัวซี': 428,
      '4ด้าน': 583,
      '3ด้านตัวยู': 476
    },
    '33x40': {
      '2ด้านตัวแอล': 320,
      '3ด้านตัวซี': 463,
      '4ด้าน': 633,
      '3ด้านตัวยู': 518
    }
  };

  function updateThicknessOptions() {
    const doorType = document.getElementById('doorType').value;
    const thicknessSelect = document.getElementById('thickness');
    thicknessSelect.innerHTML = '';
    Object.keys(priceMap[doorType]).forEach(thick => {
      const option = document.createElement('option');
      option.value = thick;
      option.textContent = thick;
      thicknessSelect.appendChild(option);
    });
  }

  function toggleBoxOptions() {
    const boxOptions = document.getElementById('boxOptions');
    boxOptions.classList.toggle('hidden', !document.getElementById('useBox').checked);
  }

  function updateBoxTypes() {
    const size = document.getElementById('boxSize').value;
    const boxTypeSelect = document.getElementById('boxType');
    boxTypeSelect.innerHTML = '';
    Object.keys(boxPriceMap[size]).forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      boxTypeSelect.appendChild(option);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateThicknessOptions();
    updateBoxTypes();
    document.getElementById('doorType').addEventListener('change', updateThicknessOptions);
  });

  let qrCodeInstance;

  function calculate() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const panelType = parseInt(document.getElementById('panelType').value);
    const doorType = document.getElementById('doorType').value;
    const thickness = document.getElementById('thickness').value;
    const useBox = document.getElementById('useBox').checked;
    const useSpring = document.getElementById('useSpring').checked;
    const useMailbox = document.getElementById('useMailbox').checked;

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      alert('กรุณากรอกความกว้างและความสูงให้ถูกต้อง');
      return;
    }

    const area = width * height;
    const doorPrice = area * priceMap[doorType][thickness];

    let boxPrice = 0;
    if (useBox) {
      const size = document.getElementById('boxSize').value;
      const type = document.getElementById('boxType').value;
      const pricePerMeter = boxPriceMap[size][type];
      boxPrice = pricePerMeter * width;
    }

    let springCount = 0;
    if (useSpring) {
      if (width < 3) springCount = 3;
      else if (width < 4) springCount = 4;
      else if (width === 4) springCount = 5;
      else if (width >= 4.74) springCount = 6;
    }
    const springPrice = springCount * 150;

    const mailboxPrice = useMailbox ? 33 : 0;

    let pillarCount = 0;
    if (panelType === 2) pillarCount = 1;
    else if (panelType === 3) pillarCount = 2;
    const pillarPrice = pillarCount * 1320;

    const subtotal = doorPrice + boxPrice + springPrice + mailboxPrice + pillarPrice;
    const vat = subtotal * 0.07;
    const total = subtotal + vat;

    let result = `พื้นที่: ${area.toFixed(2)} ตร.ม.\n`;
    result += `ราคาใบประตู: ${doorPrice.toLocaleString()} บาท\n`;
    if (useBox) result += `กล่องหุ้มเพลา (${width.toFixed(2)} ม.): ${boxPrice.toLocaleString()} บาท\n`;
    if (springCount) result += `จานสปริง ${springCount} อัน = ${springPrice.toLocaleString()} บาท\n`;
    if (useMailbox) result += `ช่องใส่จดหมาย = ${mailboxPrice.toLocaleString()} บาท\n`;
    if (pillarCount) result += `เสากลาง ${pillarCount} ต้น = ${pillarPrice.toLocaleString()} บาท\n`;
    result += `ราคารวมก่อน VAT: ${subtotal.toLocaleString()} บาท\n`;
    result += `VAT 7%: ${vat.toLocaleString()} บาท\n`;
    result += `\nรวมทั้งสิ้น: ${total.toLocaleString()} บาท`;

    document.getElementById('result').innerText = result;

    showModal();
  }

  function showModal() {
    const modal = document.getElementById('modalOverlay');
    modal.style.display = 'flex';

    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // เคลียร์ QR code เก่า
    qrCodeInstance = new QRCode(qrcodeContainer, {
      text: "https://line.me/ti/p/A1jyvgEo7C",
      width: 150,
      height: 150,
    });
  }

  function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
  }
</script>

</body>
</html>
