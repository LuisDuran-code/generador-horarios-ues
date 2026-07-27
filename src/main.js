import { inject } from '@vercel/analytics';
inject();
import './style.css'

      (function () {
        var DAY_ORDER = [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ];
        var PALETTE = [
          "#2E4057",
          "#B2782E",
          "#2E6B4F",
          "#7A3A5C",
          "#2E5F7A",
          "#8A4A2E",
          "#4A3A7A",
          "#2E7A6B",
          "#7A5A2E",
        ];

        var EXAMPLE = [
          "Codigo\tMateria\tGrupo\tTipo\tDocente\tHorario",
          "ADS135\tAnálisis y Diseño de Software I\t1\tTeorico\t\t",
          "Lunes 06:45:00 -07:35:00 IDS_VIRTUAL-4",
          "Lunes 07:35:00 -08:25:00 IDS_VIRTUAL-4",
          "Lunes 08:25:00 -09:15:00 IDS_VIRTUAL-6",
          "Sabado 13:00:00 -13:50:00 IDS_VIRTUAL-1",
          "Sabado 13:50:00 -14:40:00 IDS_VIRTUAL-1",
          "ADS135\tAnálisis y Diseño de Software I\t2\tTeorico\t\t",
          "Martes 06:45:00 -07:35:00 IDS_VIRTUAL-1",
          "Martes 07:35:00 -08:25:00 IDS_VIRTUAL-1",
          "Martes 08:25:00 -09:15:00 IDS_VIRTUAL-1",
          "Domingo 13:00:00 -13:50:00 IDS_VIRTUAL-2",
          "Domingo 13:50:00 -14:40:00 IDS_VIRTUAL-2",
          "AFI135\tAnálisis de las Finanzas\t1\tTeorico\t\t",
          "Lunes 13:00:00 -13:50:00 IDS_VIRTUAL-3",
          "Lunes 13:50:00 -14:40:00 IDS_VIRTUAL-4",
          "Lunes 14:40:00 -15:30:00 IDS_VIRTUAL-3",
          "Sabado 18:00:00 -18:50:00 IDS_VIRTUAL-2",
          "Sabado 18:50:00 -19:40:00 IDS_VIRTUAL-3",
          "AFI135\tAnálisis de las Finanzas\t2\tTeorico\t\t",
          "Jueves 13:00:00 -13:50:00 IDS_VIRTUAL-2",
          "Jueves 13:50:00 -14:40:00 IDS_VIRTUAL-3",
          "Jueves 14:40:00 -15:30:00 IDS_VIRTUAL-3",
          "Domingo 16:20:00 -17:10:00 IDS_VIRTUAL-1",
          "Domingo 17:10:00 -18:00:00 IDS_VIRTUAL-2",
          "AFI135\tAnálisis de las Finanzas\t3\tTeorico\t\t",
          "Miercoles 06:45:00 -07:35:00 IDS_VIRTUAL-2",
          "Miercoles 07:35:00 -08:25:00 IDS_VIRTUAL-2",
          "Miercoles 08:25:00 -09:15:00 IDS_VIRTUAL-3",
          "Sabado 16:20:00 -17:10:00 IDS_VIRTUAL-3",
          "Sabado 17:10:00 -18:00:00 IDS_VIRTUAL-3",
          "AFI135\tAnálisis de las Finanzas\t4\tTeorico\t\t",
          "Miercoles 18:50:00 -19:40:00 IDS_VIRTUAL-5",
          "Miercoles 19:40:00 -20:30:00 IDS_VIRTUAL-4",
          "Viernes 06:45:00 -07:35:00 IDS_VIRTUAL-2",
          "Viernes 07:35:00 -08:25:00 IDS_VIRTUAL-2",
          "Viernes 08:25:00 -09:15:00 IDS_VIRTUAL-3",
          "CDA135\tCálculo Numérico para Desarrollo de Aplicaciones\t1\tTeorico\t\t",
          "Sabado 08:25:00 -09:15:00 IDS_VIRTUAL-3",
          "Sabado 09:15:00 -10:05:00 IDS_VIRTUAL-4",
          "Domingo 06:45:00 -07:35:00 IDS_VIRTUAL-5",
          "Domingo 07:35:00 -08:25:00 IDS_VIRTUAL-5",
          "Domingo 08:25:00 -09:15:00 IDS_VIRTUAL-5",
          "CDA135\tCálculo Numérico para Desarrollo de Aplicaciones\t2\tTeorico\t\t",
          "Martes 10:05:00 -10:55:00 IDS_VIRTUAL-1",
          "Martes 10:55:00 -11:45:00 IDS_VIRTUAL-2",
          "Martes 11:45:00 -12:35:00 IDS_VIRTUAL-2",
          "Miercoles 18:50:00 -19:40:00 IDS_VIRTUAL-4",
          "Miercoles 19:40:00 -20:30:00 IDS_VIRTUAL-3",
          "DAW135\tDesarrollo de Aplicaciones Web\t1\tTeorico\t\t",
          "Lunes 18:50:00 -19:40:00 IDS_VIRTUAL-1",
          "Lunes 19:40:00 -20:30:00 IDS_VIRTUAL-1",
          "Martes 14:40:00 -15:30:00 IDS_VIRTUAL-2",
          "Martes 15:30:00 -16:20:00 IDS_VIRTUAL-1",
          "Martes 16:20:00 -17:10:00 IDS_VIRTUAL-2",
          "DAW135\tDesarrollo de Aplicaciones Web\t2\tTeorico\t\t",
          "Miercoles 14:40:00 -15:30:00 IDS_VIRTUAL-3",
          "Miercoles 15:30:00 -16:20:00 IDS_VIRTUAL-1",
          "Miercoles 16:20:00 -17:10:00 IDS_VIRTUAL-2",
          "Viernes 18:50:00 -19:40:00 IDS_VIRTUAL-6",
          "Viernes 19:40:00 -20:30:00 IDS_VIRTUAL-5",
          "DEC135\tDiseño y Estructura de Computadoras\t1\tTeorico\t\t",
          "Martes 18:50:00 -19:40:00 IDS_VIRTUAL-4",
          "Martes 19:40:00 -20:30:00 IDS_VIRTUAL-3",
          "Domingo 18:00:00 -18:50:00 IDS_VIRTUAL-4",
          "Domingo 18:50:00 -19:40:00 IDS_VIRTUAL-5",
          "Domingo 19:40:00 -20:30:00 IDS_VIRTUAL-4",
          "DEC135\tDiseño y Estructura de Computadoras\t2\tTeorico\t\t",
          "Jueves 18:50:00 -19:40:00 IDS_VIRTUAL-3",
          "Jueves 19:40:00 -20:30:00 IDS_VIRTUAL-2",
          "Domingo 10:05:00 -10:55:00 IDS_VIRTUAL-3",
          "Domingo 10:55:00 -11:45:00 IDS_VIRTUAL-3",
          "Domingo 11:45:00 -12:35:00 IDS_VIRTUAL-3",
        ].join("\n");

        var groups = [];
        var subjects = [];
        var selected = {};
        var searchTerm = "";

        var rawInput = document.getElementById("rawInput");
        var parseBtn = document.getElementById("parseBtn");
        var loadExampleBtn = document.getElementById("loadExampleBtn");
        var parseHint = document.getElementById("parseHint");
        var inputSection = document.getElementById("inputSection");
        var workspace = document.getElementById("workspace");
        var subjectsPanel = document.getElementById("subjectsPanel");
        var calendarGrid = document.getElementById("calendarGrid");
        var selectedCountEl = document.getElementById("selectedCount");
        var searchInput = document.getElementById("searchInput");
        var editRawBtn = document.getElementById("editRawBtn");
        var clearScheduleBtn = document.getElementById("clearScheduleBtn");
        var toastArea = document.getElementById("toastArea");
        var exampleModal = document.getElementById("exampleModal");
var exampleModalOverlay = document.getElementById("exampleModalOverlay");
var closeExampleModalBtn = document.getElementById("closeExampleModalBtn");
var acceptExampleBtn = document.getElementById("acceptExampleBtn");
var copyExampleBtn = document.getElementById("copyExampleBtn");
var exampleCodeEl = document.getElementById("exampleCode");
var openExampleModalBtn = document.querySelector("[data-open-example-modal]");

exampleCodeEl.textContent = EXAMPLE;

function openExampleModal() {
  exampleModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeExampleModal() {
  exampleModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (openExampleModalBtn) {
  openExampleModalBtn.addEventListener("click", openExampleModal);
}
closeExampleModalBtn.addEventListener("click", closeExampleModal);
exampleModalOverlay.addEventListener("click", closeExampleModal);
acceptExampleBtn.addEventListener("click", closeExampleModal);

copyExampleBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(EXAMPLE).then(function () {
    var original = copyExampleBtn.innerHTML;
    copyExampleBtn.textContent = "¡Copiado!";
    setTimeout(function () {
      copyExampleBtn.innerHTML = original;
    }, 2000);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !exampleModal.classList.contains("hidden")) {
    closeExampleModal();
  }
});

        loadExampleBtn.addEventListener("click", function () {
          rawInput.value = EXAMPLE;
        });
        parseBtn.addEventListener("click", handleParse);
        editRawBtn.addEventListener("click", function () {
          workspace.hidden = true;
          inputSection.hidden = false;
        });
        clearScheduleBtn.addEventListener("click", function () {
          selected = {};
          renderAll();
          showToast("Horario vaciado", "success");
        });
        searchInput.addEventListener("input", function (e) {
          searchTerm = e.target.value.trim().toLowerCase();
          renderSubjects();
        });

        var howToModal = document.getElementById("howToModal");
var howToModalOverlay = document.getElementById("howToModalOverlay");
var closeHowToModalBtn = document.getElementById("closeHowToModalBtn");
var acceptHowToModalBtn = document.getElementById("acceptHowToModalBtn");
var openHowToModalBtns = document.querySelectorAll("[data-open-howto-modal]");

function openHowToModal() {
  howToModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeHowToModal() {
  howToModal.classList.add("hidden");
  document.body.style.overflow = "";
}

openHowToModalBtns.forEach(function (btn) {
  btn.addEventListener("click", openHowToModal);
});
closeHowToModalBtn.addEventListener("click", closeHowToModal);
howToModalOverlay.addEventListener("click", closeHowToModal);
acceptHowToModalBtn.addEventListener("click", closeHowToModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !howToModal.classList.contains("hidden")) {
    closeHowToModal();
  }
});

var downloadPdfBtn = document.getElementById("downloadPdfBtn");
var calendarPanel = document.querySelector(".calendar-panel");
var calendarScroll = document.querySelector(".calendar-scroll");

function hexToRgb(hex) {
  var h = hex.replace("#", "");
  if (h.length === 3) {
    h = h.split("").map(function (c) { return c + c; }).join("");
  }
  var num = parseInt(h, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

downloadPdfBtn.addEventListener("click", function () {
  if (Object.keys(selected).length === 0) {
    showToast("Selecciona al menos un grupo antes de descargar", "error");
    return;
  }

  var days = [];
  var minStart = Infinity, maxEnd = -Infinity;
  Object.keys(selected).forEach(function (id) {
    selected[id].slots.forEach(function (s) {
      minStart = Math.min(minStart, toMin(s.start));
      maxEnd = Math.max(maxEnd, toMin(s.end));
      if (days.indexOf(s.day) === -1) days.push(s.day);
    });
  });
  days.sort(function (a, b) {
    return DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b);
  });
  minStart = Math.floor(minStart / 60) * 60;
  maxEnd = Math.ceil(maxEnd / 60) * 60;

  var jsPDF = window.jspdf.jsPDF;
  var pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  var pageWidth = 297, pageHeight = 210;
  var marginX = 10, marginTop = 22, marginBottom = 10, axisWidth = 14;
  var gridWidth = pageWidth - marginX * 2 - axisWidth;
  var colWidth = gridWidth / days.length;
  var gridHeight = pageHeight - marginTop - marginBottom;
  var pxPerMin = gridHeight / (maxEnd - minStart);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.setTextColor(30, 30, 30);
  pdf.text("Mi horario", marginX, 14);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(120, 120, 120);
  pdf.text("Generador de Horarios UES", marginX, 19);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  days.forEach(function (day, i) {
    var x = marginX + axisWidth + i * colWidth;
    pdf.setFillColor(245, 245, 245);
    pdf.rect(x, marginTop - 6, colWidth, 6, "F");
    pdf.setTextColor(60, 60, 60);
    pdf.text(day.slice(0, 3).toUpperCase(), x + colWidth / 2, marginTop - 2, { align: "center" });
  });

  pdf.setDrawColor(225, 225, 220);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.5);
  pdf.setTextColor(140, 140, 140);
  for (var m = minStart; m <= maxEnd; m += 60) {
    var y = marginTop + (m - minStart) * pxPerMin;
    var h = String(Math.floor(m / 60));
    if (h.length < 2) h = "0" + h;
    pdf.text(h + ":00", marginX + axisWidth - 2, y + 2, { align: "right" });
    pdf.line(marginX + axisWidth, y, pageWidth - marginX, y);
  }

  days.forEach(function (day, i) {
    var x = marginX + axisWidth + i * colWidth;
    pdf.line(x, marginTop - 6, x, marginTop + gridHeight);
  });
  pdf.line(
    marginX + axisWidth + days.length * colWidth, marginTop - 6,
    marginX + axisWidth + days.length * colWidth, marginTop + gridHeight
  );

  Object.keys(selected).forEach(function (id) {
    var group = selected[id];
    var subject = null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].codigo === group.codigo) { subject = subjects[i]; break; }
    }
    var merged = mergeSlots(group.slots);

    merged.forEach(function (s) {
      var dayIndex = days.indexOf(s.day);
      if (dayIndex === -1) return;
      var async = isAsyncDay(group.slots, s.day);
      var rgb = async ? [220, 218, 212] : hexToRgb(subject.color);
      var x = marginX + axisWidth + dayIndex * colWidth + 0.6;
      var y = marginTop + (toMin(s.start) - minStart) * pxPerMin;
      var boxH = Math.max((toMin(s.end) - toMin(s.start)) * pxPerMin, 6);
      var w = colWidth - 1.2;

      pdf.setFillColor(rgb[0], rgb[1], rgb[2]);
      pdf.roundedRect(x, y, w, boxH, 1, 1, "F");

      if (async) {
        pdf.setTextColor(75, 71, 64);
      } else {
        pdf.setTextColor(255, 255, 255);
      }
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(7);
      pdf.text(group.codigo + "-" + group.grupo, x + 1.2, y + 3, { maxWidth: w - 2 });

      if (boxH > 7) {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(6.5);
        var timeLabel = fmt(s.start) + "-" + fmt(s.end) + (async ? " (async)" : "");
        pdf.text(timeLabel, x + 1.2, y + 6.5, { maxWidth: w - 2 });
      }
    });
  });

  pdf.save("mi-horario.pdf");
  showToast("Horario descargado", "success");
});

        function normalizeDay(d) {
          var map = {
            lunes: "Lunes",
            martes: "Martes",
            miercoles: "Miércoles",
            miércoles: "Miércoles",
            jueves: "Jueves",
            viernes: "Viernes",
            sabado: "Sábado",
            sábado: "Sábado",
            domingo: "Domingo",
          };
          return map[d.toLowerCase()] || d;
        }
        function toMin(t) {
          var p = t.split(":");
          return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
        }
        function fmt(t) {
          return t.slice(0, 5);
        }
        function colorFor(codigo) {
          var hash = 0;
          for (var i = 0; i < codigo.length; i++) {
            hash = (hash * 31 + codigo.charCodeAt(i)) >>> 0;
          }
          return PALETTE[hash % PALETTE.length];
        }
        function esc(s) {
          return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }

        var DAY_TIME_RE =
          /^(Lunes|Martes|Mi[ée]rcoles|Jueves|Viernes|S[áa]bado|Domingo)\s+(\d{2}:\d{2}:\d{2})\s*-\s*(\d{2}:\d{2}:\d{2})\s+(\S.*)$/i;

        function parseSchedule(text) {
          var lines = text.split("\n");
          var parsed = [];
          var current = null;
          var counter = 0;

          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].replace(/\r$/, "").trim();
            if (!line) continue;

            var dayMatch = line.match(DAY_TIME_RE);
            if (dayMatch) {
              if (current) {
                current.slots.push({
                  day: normalizeDay(dayMatch[1]),
                  start: dayMatch[2],
                  end: dayMatch[3],
                  room: dayMatch[4].trim(),
                });
              }
              continue;
            }

            if (line.indexOf("\t") !== -1) {
              var parts = line.split("\t");
              for (var j = 0; j < parts.length; j++) {
                parts[j] = parts[j].trim();
              }
              if (parts[0].toLowerCase() === "codigo") continue;
              if (parts.length >= 3 && parts[0]) {
                current = {
                  id: parts[0] + "_" + parts[2] + "_" + counter++,
                  codigo: parts[0],
                  materia: parts[1] || "(sin nombre)",
                  grupo: parts[2] || "?",
                  tipo: parts[3] || "",
                  docente: parts[4] || "",
                  slots: [],
                };
                parsed.push(current);
              }
            }
          }

          var out = [];
          for (var k = 0; k < parsed.length; k++) {
            if (parsed[k].slots.length > 0) out.push(parsed[k]);
          }
          return out;
        }

        function mergeSlots(slots) {
          var byDay = {};
          slots.forEach(function (s) {
            if (!byDay[s.day]) byDay[s.day] = [];
            byDay[s.day].push(s);
          });
          var merged = [];
          Object.keys(byDay).forEach(function (day) {
            var arr = byDay[day].slice().sort(function (a, b) {
              return a.start.localeCompare(b.start);
            });
            var block = null;
            arr.forEach(function (s) {
              if (block && block.end === s.start && block.room === s.room) {
                block.end = s.end;
              } else {
                if (block) merged.push(block);
                block = { day: day, start: s.start, end: s.end, room: s.room };
              }
            });
            if (block) merged.push(block);
          });
          merged.sort(function (a, b) {
            return (
              DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day) ||
              a.start.localeCompare(b.start)
            );
          });
          return merged;
        }

        function findConflicts(group, others) {
          var conflicts = [];
          others.forEach(function (g) {
            if (g.id === group.id) return;
            var hit = false;
            for (var i = 0; i < group.slots.length && !hit; i++) {
              var s1 = group.slots[i];
              for (var j = 0; j < g.slots.length; j++) {
                var s2 = g.slots[j];
                if (s1.day !== s2.day) continue;
                var a1 = toMin(s1.start),
                  a2 = toMin(s1.end);
                var b1 = toMin(s2.start),
                  b2 = toMin(s2.end);
                if (a1 < b2 && b1 < a2) {
                  hit = true;
                  break;
                }
              }
            }
            if (hit) conflicts.push(g);
          });
          return conflicts;
        }

        function handleParse() {
          var text = rawInput.value;
          if (!text.trim()) {
            parseHint.textContent = "Pega primero el listado de horarios.";
            return;
          }
          var result = parseSchedule(text);
          if (result.length === 0) {
            parseHint.textContent =
              'No se detectaron grupos. Verifica que el texto conserve tabulaciones y las líneas de "Día HH:MM:SS -HH:MM:SS Aula".';
            return;
          }
          parseHint.textContent = "";
          groups = result;
          selected = {};

          var subjectMap = {};
          var order = [];
          groups.forEach(function (g) {
            if (!subjectMap[g.codigo]) {
              subjectMap[g.codigo] = {
                codigo: g.codigo,
                materia: g.materia,
                color: colorFor(g.codigo),
                groups: [],
              };
              order.push(g.codigo);
            }
            subjectMap[g.codigo].groups.push(g);
          });
          subjects = order.map(function (c) {
            return subjectMap[c];
          });

          inputSection.hidden = true;
          workspace.hidden = false;
          renderAll();
          showToast(
            groups.length +
              " grupos detectados en " +
              subjects.length +
              " materias",
            "success",
          );
        }

        function toggleGroup(id) {
          var group = null;
          for (var i = 0; i < groups.length; i++) {
            if (groups[i].id === id) {
              group = groups[i];
              break;
            }
          }
          if (!group) return;

          if (selected[id]) {
            delete selected[id];
            renderAll();
            return;
          }

          var sameSubjectId = null;
          Object.keys(selected).forEach(function (k) {
            if (selected[k].codigo === group.codigo) sameSubjectId = k;
          });

          var others = [];
          Object.keys(selected).forEach(function (k) {
            if (k !== sameSubjectId) others.push(selected[k]);
          });

          var conflicts = findConflicts(group, others);
          if (conflicts.length) {
            var names = conflicts
              .map(function (c) {
                return c.codigo + "-" + c.grupo;
              })
              .join(", ");
            showToast(
              "No se puede agregar " +
                group.codigo +
                "-" +
                group.grupo +
                ": choca con " +
                names,
              "error",
            );
            var flashIds = [id];
            conflicts.forEach(function (c) {
              flashIds.push(c.id);
            });
            flashCards(flashIds);
            return;
          }

          if (sameSubjectId) delete selected[sameSubjectId];
          selected[id] = group;
          renderAll();
        }

        function flashCards(ids) {
          ids.forEach(function (id) {
            var el = document.querySelector('[data-group-id="' + id + '"]');
            if (el) {
              el.classList.remove("flash");
              void el.offsetWidth;
              el.classList.add("flash");
            }
          });
        }

        function showToast(msg, type) {
          var el = document.createElement("div");
          el.className = "toast" + (type ? " " + type : "");
          el.textContent = msg;
          toastArea.appendChild(el);
          setTimeout(function () {
            el.remove();
          }, 3600);
        }

        function renderAll() {
          renderSubjects();
          renderCalendar();
          selectedCountEl.textContent = Object.keys(selected).length;
        }

        function renderSubjects() {
          subjectsPanel.innerHTML = "";
          var term = searchTerm;
          var filtered = subjects.filter(function (s) {
            return (
              !term ||
              s.codigo.toLowerCase().indexOf(term) !== -1 ||
              s.materia.toLowerCase().indexOf(term) !== -1
            );
          });

          if (filtered.length === 0) {
            subjectsPanel.innerHTML =
              '<div class="empty-msg">No hay materias que coincidan con tu búsqueda.</div>';
            return;
          }

          filtered.forEach(function (subject) {
            var block = document.createElement("div");
            block.className = "subject-block";

            var head = document.createElement("div");
            head.className = "subject-head";
            head.innerHTML =
              '<span class="subject-code" style="background:' +
              subject.color +
              '">' +
              esc(subject.codigo) +
              "</span>" +
              '<span class="subject-name">' +
              esc(subject.materia) +
              "</span>";
            block.appendChild(head);

            subject.groups.forEach(function (group) {
              var isSel = !!selected[group.id];
              var card = document.createElement("div");
              card.className = "group-card" + (isSel ? " selected" : "");
              card.dataset.groupId = group.id;
              card.style.borderLeftColor = isSel
                ? subject.color
                : "transparent";

              var merged = mergeSlots(group.slots);
              var slotsHtml = merged
                .map(function (s) {
                  var async = isAsyncDay(group.slots, s.day);
                  var cls = "group-slot" + (async ? " async" : "");
                  var tag = async
                    ? ' <span class="async-tag">as\u00edncrono</span>'
                    : "";
                  return (
                    '<div class="' +
                    cls +
                    '"><b>' +
                    esc(s.day) +
                    "</b> " +
                    fmt(s.start) +
                    "\u2013" +
                    fmt(s.end) +
                    " \u00b7 " +
                    esc(s.room) +
                    tag +
                    "</div>"
                  );
                })
                .join("");

              card.innerHTML =
                '<div class="group-check" style="' +
                (isSel
                  ? "background:" +
                    subject.color +
                    ";border-color:" +
                    subject.color
                  : "") +
                '">' +
                (isSel ? "\u2713" : "") +
                "</div>" +
                '<div class="group-body">' +
                '<div class="group-title">Grupo ' +
                esc(group.grupo) +
                (group.docente ? " \u00b7 " + esc(group.docente) : "") +
                "</div>" +
                "<div>" +
                slotsHtml +
                "</div>" +
                "</div>";

              card.addEventListener("click", function () {
                toggleGroup(group.id);
              });
              block.appendChild(card);
            });

            subjectsPanel.appendChild(block);
          });
        }

        function renderCalendar() {
          calendarGrid.innerHTML = "";
          if (groups.length === 0) return;

          var minStart = Infinity,
            maxEnd = -Infinity;
          var daysPresent = {};
          groups.forEach(function (g) {
            g.slots.forEach(function (s) {
              minStart = Math.min(minStart, toMin(s.start));
              maxEnd = Math.max(maxEnd, toMin(s.end));
              daysPresent[s.day] = true;
            });
          });
          minStart = Math.floor(minStart / 60) * 60;
          maxEnd = Math.ceil(maxEnd / 60) * 60;
          var days = DAY_ORDER.filter(function (d) {
            return daysPresent[d];
          });
          var pxPerMin = 1.1;
          var totalHeight = (maxEnd - minStart) * pxPerMin;

          var axisCol = document.createElement("div");
          axisCol.className = "axis-col";
          axisCol.style.height = totalHeight + 30 + "px";
          axisCol.style.marginTop = "30px";
          for (var m = minStart; m <= maxEnd; m += 60) {
            var lbl = document.createElement("div");
            lbl.className = "axis-label";
            lbl.style.top = (m - minStart) * pxPerMin + "px";
            var h = String(Math.floor(m / 60));
            if (h.length < 2) h = "0" + h;
            lbl.textContent = h + ":00";
            axisCol.appendChild(lbl);
          }
          calendarGrid.appendChild(axisCol);

          var selCount = Object.keys(selected).length;
          if (selCount === 0) {
            var wrap = document.createElement("div");
            wrap.style.flex = "1";
            wrap.style.position = "relative";
            wrap.innerHTML =
              '<div class="cal-empty">Selecciona un grupo a la izquierda para armar tu horario.</div>';
            calendarGrid.appendChild(wrap);
            return;
          }

          days.forEach(function (day) {
            var col = document.createElement("div");
            col.className = "day-col";

            var headEl = document.createElement("div");
            headEl.className = "day-col-head";
            headEl.textContent = day.slice(0, 3);
            col.appendChild(headEl);

            var body = document.createElement("div");
            body.className = "day-col-body";
            body.style.height = totalHeight + "px";

            for (var m2 = minStart; m2 <= maxEnd; m2 += 60) {
              var line = document.createElement("div");
              line.className = "hour-line";
              line.style.top = (m2 - minStart) * pxPerMin + "px";
              body.appendChild(line);
            }

            Object.keys(selected).forEach(function (id) {
              var group = selected[id];
              var subject = null;
              for (var i = 0; i < subjects.length; i++) {
                if (subjects[i].codigo === group.codigo) {
                  subject = subjects[i];
                  break;
                }
              }
              var merged = mergeSlots(group.slots).filter(function (s) {
                return s.day === day;
              });
              merged.forEach(function (s) {
                var async = isAsyncDay(group.slots, s.day);
                var top = (toMin(s.start) - minStart) * pxPerMin;
                var height = (toMin(s.end) - toMin(s.start)) * pxPerMin;
                var blockEl = document.createElement("div");
                blockEl.className = "cal-block" + (async ? " async" : "");
                blockEl.style.top = top + "px";
                blockEl.style.height = Math.max(height, 18) + "px";
                if (!async) { blockEl.style.background = subject.color; }
                blockEl.innerHTML =
                  "<b>" +
                  esc(group.codigo) +
                  "-" +
                  esc(group.grupo) +
                  "</b>" +
                  fmt(s.start) +
                  "\u2013" +
                  fmt(s.end) +
                  (async ? " \u00b7 as\u00edncrono" : "");
                blockEl.title =
                  group.materia +
                  " \u00b7 " +
                  s.room +
                  (async ? " (as\u00edncrono)" : " (sincr\u00f3nico)");
                body.appendChild(blockEl);
              });
            });

            col.appendChild(body);
            calendarGrid.appendChild(col);
          });
        }

        // Regla confirmada: por grupo, el ÚNICO día sincrónico posible es el
        // más tardío en la semana (Lunes→Domingo) entre los días cuyo total
        // de minutos es EXACTAMENTE 100. Todos los demás días de ese grupo
        // son asincrónicos, incluso si también suman 100 o cualquier otro valor.
        function dayTotalsForSlots(slots) {
          var totals = {};
          slots.forEach(function (s) {
            totals[s.day] = (totals[s.day] || 0) + (toMin(s.end) - toMin(s.start));
          });
          return totals;
        }
        function syncDayFor(slots) {
          var totals = dayTotalsForSlots(slots);
          var candidates = Object.keys(totals).filter(function (day) {
            return totals[day] === 100;
          });
          if (candidates.length === 0) return null;
          candidates.sort(function (a, b) {
            return DAY_ORDER.indexOf(b) - DAY_ORDER.indexOf(a);
          });
          return candidates[0];
        }
        function isAsyncDay(slots, day) {
          return day !== syncDayFor(slots);
        }
      })();

const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

  document.addEventListener("DOMContentLoaded", function () {
  var fullscreenVideoBtn = document.getElementById("fullscreenVideoBtn");
  var exitFullscreenBtn = document.getElementById("exitFullscreenBtn");
  var videoContainer = document.getElementById("videoContainer");

 

  if (fullscreenVideoBtn && videoContainer) {
    fullscreenVideoBtn.addEventListener("click", function () {
      
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      }
    });
  }

  if (exitFullscreenBtn) {
    document.addEventListener("fullscreenchange", function () {
      if (document.fullscreenElement) {
        exitFullscreenBtn.classList.remove("hidden");
      } else {
        exitFullscreenBtn.classList.add("hidden");
      }
    });

    exitFullscreenBtn.addEventListener("click", function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    });
  }
});