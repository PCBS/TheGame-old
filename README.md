Bude se jednat o webovy server na `PHP`, ktery bude slouzit k ...

# Syst�m hry:
Jde o hru na trzn� syst�m, kdy maj� tymy na notebooku webovou aplikaci s polozkama o ruzn� hodnote, kter� mohou nakupovat nebo prod�vat - podle n�kupu/prodeju stoup� nebo kles� cena dan�ho zboz�. Nekter� veci jdou `vytezit` - po okol� jsou pap�rky s k�dy, kter� se zadaj� do syst�mu, ktery pricte na �cet tymu danou surovinu (jde to i zkomplikovat t�m, ze na kazdou surovinu je nejdr�v potreba koupit licenci na tezbu). Dals� veci jdou zase vyr�bet z jinych (tady se mohou treba vyzadovat recepty). C�lem kazd�ho tymu je vydelat co nejv�c penez co nejleps� volbou "tezenych" surovin, popr. n�kupy a jejich prodejem nebo vyroben�m jin� veci a jej�m prodejem. Musela by se ale napsat aplikace, kter� bude tyto transakce zajistovat a poc�tat vydelky - nejak extra n�rocn� to nen�, ale p�r veceru by to potrebovalo obetovat. Kazdop�dne n�pad. :)
*nezapomenout na zalohy, logy a podobne zachranne mechanismy kdyby se to pokazilo*

# Veci za ktore sa bude nieco dostavat:
* Turnaje
* Nocn� hra
* Esus
* Random hry vonku

# Workflow (prozatimni, subject to change):
* [x] Vymyslet nazev
* [x] Pridat databazi na GH
<<<<<<< HEAD
=======
* [ ] Vytvaret podrony log vseho co se dejo
>>>>>>> c1f95256673934ea41f94d4de2ee0eb550df8cc3
* [ ] Administrace
  * [ ] Pridavani tymu a jejich sprava
* [ ] Generovani kodu, ktere se pak vytisknou a budou symbolizovat ruzne veci
* [ ] Redeem techto kodu
* [ ] Stranka s prubeznymi vysledky a ruzne statisky, grafy
* [ ] Trading str�nka
  * [ ] Nabidka a jeji potvrzeni, odmitnuti, zmena ceny s urcitym clovekem za pevnou cenu
  * [ ] Nabidka a poptavka vsem za urcitou cenu
  * [ ] Nabidka casove omezena, na konci se proda tomu kdo nabidl nejvic
* [ ] Crafting str�nka
  * [ ] Ucraftit
  * [ ] Seznam receptu
