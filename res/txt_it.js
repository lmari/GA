/*
This file is part of PolyGA, made by Luca Mari, 2018-2019.

PolyGA is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, version 2.

PolyGA is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU General Public License <http://www.gnu.org/licenses/> for more details.
*/
let txt = {
  evolByStep: "Evoluzione: passo-passo", evolFast: "veloce",
  manExec1: "1. Individua", manExec2: "2. Seleziona", manExec3: "3. Aggiorna",
  toolManExec: "Gestisce manualmente l’evoluzione, in tre passi:<br>1. individua gli individui da eliminare;<br>2. elimina gli individui individuati;<br>3. genera nuovi individui.",
  autoExec1: "1. Attiva l’evoluzione", autoExec2: "2. Ferma l’evoluzione",
  toolAutoExec: "Attiva o ferma la evoluzione.",
  setup: "Configurazione:",
  numPts: "num geni", toolNumPts: "Numero di geni nel DNA (<i>numero di punti di controllo di ogni polinomio</i>).",
  numSrs: "num individui", toolNumSrs: "Numero di individui nella popolazione (<i>numero di polinomi nella popolazione</i>).<br>Nota che si assume che il numero di individui nella popolazione sia costante.",
  selection: "Selezione:",
  numDel: "num eliminati", toolNumDel: "Numero di individui eliminati nella selezione (<i>numero di polinomi eliminati</i>).<br>Può essere al massimo pari al numero di individui della popolazione meno uno, in modo da garantire comunque una continuità nella popolazione.",
  generation: "Generazione:",
  combin: "prob ricombinazione", toolCombin: "Probabilità di ricombinazione (<i>probabilità di crossover dei parametri dei polinomi</i>).<br>E’ un valore tra 0 e 50 che descrive la probabilità che ogni gene di un figlio sia il gene di un genitore: 0 significa che non c’è ricombinazione, e quindi la riproduzione è asessuata (il figlio ha i geni di un solo genitore); 50 significa che i geni dei figli sono presi metà da un genitore e metà dall’altro.",
  change: "prob mutazioni", toolChange: "Probabilità di mutazioni (<i>probabilità di cambiamenti dei parametri dei polinomi</i>).<br>E’ un valore tra 0 e 100 che descrive la probabilità che ogni gene subisca una mutazione.",
  chang2: "amp mutazioni", toolChang2: "Ampiezza delle mutazioni (<i>ampiezza dei cambiamenti dei parametri dei polinomi</i>).<br>E’ un valore tra 0 e 100 che descrive quanto sono grandi numericamente le mutazioni, quando si verificano.",
  immigration: "Immigrazione:",
  numNew: "num nuovi individui", toolNumNew: "Numero di individui entrati nella popolazione per immigrazione (<i>numero di nuovi polinomi</i>).<br>Può essere al massimo pari al numero di individui della popolazione. Poiché che si assume che il numero di individui nella popolazione sia costante, ogni nuovo immigrato sostituisce un individuo preesistente della popolazione.",
  setAll: "Riconfigura il sistema", toolSetAll: "Riconfigura il sistema in accordo ai parametri scelti.",
  resetTarget: "Crea un nuovo obiettivo", toolResetTarget: "Crea un nuovo obiettivo casuale.",
  showParams: "Mostra i parametri", toolShowParams: "Mostra i parametri degli individui della popolazione.",
  numGen: "Numero di generazioni", medianMSE: "Distanza media dall'obiettivo",
};

function getTxt(id) { return txt[id]; }

function setText(container, id) { $('#' + container).html(txt[id]); }
