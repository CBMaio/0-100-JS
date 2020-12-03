//Encontrar las dos entradas que suman 2020Por ejemplo, suponga que su informe de gastos contiene lo siguiente:
// [1721, 979, 366, 299,675,1456]
// En esta lista, las dos entradas que suman 2020 son 1721 y 299. Multiplicarlas juntas produce 1721 * 299 = 514579, por lo que la respuesta correcta es 514579.
// Por supuesto, su informe de gastos es mucho más grande. Encuentre las dos entradas que sumen 2020
// Hint: Debe crear alguna  función que a partir del txt te genere un vector. Usar el método split...

let txt = `1974
1902
1356
1724
1550
1870
1436
1945
1640
1766
1508
1802
1495
1837
131
1754
1296
1627
1768
1451
1252
1566
1611
1531
1868
1745
1894
1799
1948
1930
1400
2003
1777
1279
472
1474
1787
1406
1522
1646
1865
1581
1609
1705
1383
1276
1613
1190
1856
1528
1091
1540
1720
1824
1734
1919
1681
1686
1344
1644
1670
1710
1708
1458
1728
1972
1630
1995
1763
1935
451
1392
1990
14
1893
1437
1632
1933
1887
1975
1453
1897
2005
2008
1959
1716
1635
1619
1994
1674
1942
1817
1825
196
769
1065
1662
1079
1574
1554
1621
1857
1312
1544
2001
1991
1602
1669
1982
1309
1556
1855
1284
1641
1786
735
1921
1661
1934
1552
1012
1748
1782
1631
1607
1659
1997
1600
1594
1798
1405
1790
1993
1960
1717
999
1687
1771
1977
1809
1884
1795
1639
1565
1299
1643
1700
2002
1823
1369
1572
1657
1683
1966
1606
1792
1756
1936
1718
2009
1711
1461
1638
1645
1914
1963
1546
1846
1737
1788
1589
1860
1830
1905
1571
1989
1780
1878
1767
1776
1727
1582
1769
1040
694
1327
1623
1688
1694
1932
2000
1969
1590
1425
1917
1324
1852
1753
1743
1551`;

const toArr = (txt) => {
  const arr = txt.split("\n");
  return arr;
};

const arr = toArr(txt);
const number = 2020;
let num1;
let num2;
let num3;

//Encontrar dos números

const findNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseFloat(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      arr[j] = parseFloat(arr[j]);
      if (arr[j] + arr[i] === number) {
        num1 = arr[j];
        num2 = arr[i];
        break;
      }
    }
  }

  const resultNum = `${num1} + ${num2} = ${number}`;
  const finalResult = num1 * num2;
  return resultNum;
};

//Encontrar tres números

const findThreeNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseFloat(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      arr[j] = parseFloat(arr[j]);
      for (let k = 0; k < arr.length; k++) {
        arr[k] = parseFloat(arr[k]);
        if (arr[j] + arr[i] + arr[k] === number) {
          num1 = arr[j];
          num2 = arr[i];
          num3 = arr[k];
          break;
        }
      }
    }
  }

  const resultNum = `${num1} + ${num2} + ${num3} = ${number}`;
  const finalResult = num1 * num2 * num3;
  return resultNum;
};

console.log(findThreeNumbers(arr));
