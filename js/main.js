/* ==========================================================
   明視眼鏡 MingShi Optical — 全站共用互動腳本
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNavLink();
  initAccordion();
  initProductFilter();
  initContactForm();
  initMemberGate();
});

/* 手機版導覽選單開關 */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* 依目前頁面檔名，自動標示導覽列 active 狀態 */
function initActiveNavLink() {
  const current = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

/* FAQ 手風琴 */
function initAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector(".accordion-question");
    const answer = item.querySelector(".accordion-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      item.classList.toggle("open", !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : "0px";
      question.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

/* 商品專區分類篩選 */
function initProductFilter() {
  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll("[data-category]");
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.filter;
      cards.forEach((card) => {
        const match = target === "all" || card.dataset.category === target;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

/* 聯絡我們／線上客服表單（前端示意，尚未串接後端） */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const success = document.querySelector("#contact-form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (success) {
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.reset();
  });
}

/* 優惠活動頁「會員專屬優惠」預留區塊 — 目前尚無會員系統 */
function initMemberGate() {
  const buttons = document.querySelectorAll("[data-member-gate]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("會員登入功能即將推出，敬請期待！");
    });
  });
}
