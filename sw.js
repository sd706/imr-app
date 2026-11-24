// Service Worker เวอร์ชัน 2 สำหรับรองรับการติดตั้ง PWA ลง Desktop และล้างแคชเก่า
const CACHE_VERSION = 'imr-pwa-v2';

// สั่งให้เวอร์ชันใหม่ทำงานทันทีโดยไม่ต้องรอปิดแท็บทั้งหมด
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// เข้าควบคุมหน้าเว็บทันทีที่เปิดใช้งาน
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// ปล่อยให้การโหลดข้อมูลทั้งหมดวิ่งตรงไปที่ Google Apps Script ตามปกติ
self.addEventListener('fetch', (event) => {
    // ไม่ดักเก็บแคชข้อมูลเพื่อป้องกันข้อมูลคำขออัตรากำลังไม่อัปเดต
});
