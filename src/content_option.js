const logotext = "Sammy";
const meta = {
    title: "Ifaduola Samuel",
    description: "I’m Ifaduola Samuel  Software Engineer ,currently working in Lagos", 
};

const introdata = {
    title: "I’m Ifaduola Samuel",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I love drone piloting",
        four: "I love video editing",
    },
    description: "I'm a Frontend Developer that works mainly with React Gatsby. In my projects",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a Frontend Developer that works mainly with React Batsby. In my projects.Front end engineers plan, design, build, and implement the user interface systems of websites, software programs, and web-based applications. Their primary goal is to provide a satisfactory user experience with no issues, errors, or downtime. They create and optimize systems, play an active role in testing and troubleshooting, and resolve issues such as those related to accessibility and browser compatibility. They often serve as an intermediary bridging the gap between the user and the backend developers, and tweak tools and platforms to adapt to real-world use situations.",
};

const worktimeline = [{
    jobtitle: "Frontend Engineer",
    where: "Lagos Nigeria",
    date: "2017",
},
{
    jobtitle: "Video Editing",
    where: "Lagos Nigeria",
    date: "2019",
},
{
    jobtitle: "Drone Piloting",
    where: "Lagos Nigeria",
    date: "2020",
},
];

const skills = [{
    name: "Javascript",
    value: 90,
},
{
    name: "React",
    value: 85,
},
{
    name: "Jquery",
    value: 80,
},
{
    name: "Batsby",
    value: 60,
},
{
    name: "Redux",
    value: 75,
},
{
    name: "Material Ui",
    value: 85,
},
];

const services = [{
    title: "Frontend Engineer",
    description: "I'm a Frontend Developer that works mainly with React Batsby.",
},
{
    title: "Drone Piloting",
    description: "The responsibility of drone pilots to conduct safety tests, oversee vehicle performance, and assess drone systems’ capabilities.",
},
{
    title: "Video Editing",
    description: "Video Editors are generally responsible for editing and assembling recorded raw material into a suitable, finished product ready for broadcasting.",
},
];


const dataportfolio = [{
    img: "https://user-images.githubusercontent.com/68134403/152302033-a9d85331-70a5-4840-ac2e-f038b4aea0b0.png",
    desctiption: "E-commcerc Shop.",
    link: "https://sofa-eshop.netlify.app/",
},
{
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUSExIWFRUXExkXFxgVFhkXGBYXGhYYFxkVFhgYHCghGB0lIBUVIjEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy8mICUtLS0tLS0vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLf/AABEIAGgB5gMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAEYQAAEDAQQFBwgIBQQCAwAAAAEAAgMRBAYSIQUxQVFhByJxgZGhshMjJDI0cnOxM1JTYoKzwcIWQpLR0kODk6IU4RVj8P/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAtEQACAgEDAgQGAgMBAAAAAAAAAQIDEQQSITFBIjJxgRMzUaHB8GGRI7HRFP/aAAwDAQACEQMRAD8A3FERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBQel7wxWY4fXk+q06veOzvK+rz6UNmhq313HC3hvd1Dvos3Lq5k1JzJOsneVlvvcPDHqZdRe4eGPUsVpvbaHerhYODanrLq/Jc38S2v7Y/0M/xUMCu12iZw3EYXge4e8awsm+yXdmL4lku79iWst752+theOIwntbl3KzaH0/FaOaOa/6rtvun+b58Fm9Ua8tIIJBBqCMiCNoU4aiceryidepnF88o2FFD3b0p/wCTCHH12nC/p+t1j9VJWm0NjaXvIa0CpJXoqSaz2PSjJOO5dD2RVv8AjCCtML6b6N7aYqqdslpZKwPY7E06iFGNkZeVnI2Ql5Xk90RFMmEREAREQBERAEREAREQBQ9rvFZ4jhL8RGvCC6nXqXNfG3GKENaaGR2Go1hus07h1qg1WW/UOD2xMl+ocHtiaZo3TUVocWx4qgVNRTKtFJqjXDPnZPc/cFeVbTNzhll1E3OG5hRNu07BC7C59XDWGgup00yHQvTT9rMNnke3WAADuLiG16q1WZ4lXfe4PCKtRe62lHqaLZLxwSvbG3FVxoKtoNVf0Uys1uwfSovePhctKUqLHOLbJ6ex2RywiLktdvji+kkYz3nAHqB1q/oXvjlnWirlrvlZWeq50h+439XUCh7Vf1x+jhaOL3E9wp81VK6Ee5TK+uPcva85ZWtFXENG8mg71mFqvTapP9UtG5gDe8Z96ipp3PNXOLjvcST2lVS1S7IplrF2Rp1qvNZY9cwcdzAX97cu9RFpv0wfRwuPF5De4VVFxJiVMtTN9OCmWqsfTgtJvtPirgZTdR3zxK46E0m21RCRopnRzdeFw2V27DXislxrRbi2N8cBc8EY3Ymg/VpQHrz6qKdFk5Sw3lFmmtnKeG8op1+bx2hlqdEyR0bGUADXOYXGmKpIzNcWrVQDJXG4ulZLVZQ6XNzZCzFqxABpDjx51F16ZuxZrW4PlZzgKYmmhI3HepCwWKOCMRxtDGAZAfMk5k8SvQbWD6TU6zTWaOFMIYmsZeF2XLyuXu/n8HWiIoHkhERAEREAREQBERAEREAREQBERAEREAREQFI5Q3nHCNmF572/2VRqrxygWIuiZKB9G4h3uupn2gDrVCqvNvX+Rnl6lYsZY7ksa61DFTJji2v1sv0Llo6xiGdzHBzSWuBqCNYKuGjL8amzx/jZ8y0/oepW6e2MVtZdprowjtfB26eumJiZIiGPOZafVcd+XqntVeddW1g/Rg8Q9n6kK96P0tBaPopGuO7U7rac1IK10VzeV9i6Wnrn4l9ipXP0ZaLO+TyrMLXNGeJp5wOQoCdjj2LrvvG51nBbqbIHOp9WjhXoqQrEvxT+EtmxE/gpV7EzIMSvdxo3CBxOQdIS3iKAEjhUdy97XBYIn+cbE12uhp3t/wDSlrHaGSMDo3BzdQLdWWVB2KmmjZLLZRRRsnlvk6ERcVu0nDD9JI1p3E59gzWptLqa20up2rxtMwjY57tTWlx6AKlRsN5bK40EwHvBzR2uAC9dOOBsspBqDGaEbclzcmm1yR3pptPJS7bea0SOJa8xt2NbQ0HE6yVaLn2t8sLnSOLiJCKndhYad5Wd4lfbhezu+KfCxYdPOTs5f1MOmnKVnL7MsyIvG0zsjGJ7mtG9xAHevQPRPZFDuvJZQaeWHU1x7w1dVk0rDKaMla47q0PYc1FTi3hNEFZFvCa/s7kRFImVHlBPMi953yCpeJXLlFdRkPvu+QVEMw39i83UfMZ5eq+ay4XBPnpPh/uCvay26+kJYpHmGAyuLKUrSgqOccv7Kckm0vNqjbCOHk/3OcVoontrxh/v2NFFijWlhv0X56E1fH2OX8H5jFmxmG9TOmtA2xkTprRMHhtObje45uDcgRQa1WcKpv8AFLLWODNqZ5nlrHH5ZKaL0oIJWS4S7CSaVpXIjX1qYtV+53eoxjB1vPaaDuUJoCwtntEcb64XEg0ND6pOvqWhw3Rsbf8ARr7z3nurRdpjY14XhEqI2Si9jwjPbXp20y+vO+m4c0djaBcDMzQCp4Zla3/8dZYRiMUTB9Zwb8yvaxW+GSrYntNBUhuwKb0+X4pc/v1ZY9K2/FLn9+rMrh0VaH+rBIf9t1O0ii7YbrWx3+jT3nMHdiqtVRTWlj3ZYtHHu2ZxDce0n1nRt/E4nub+q7obgH+a0DobH+pd+itU+loGHC6ZgI1jEKjppqXXFIHAOaaggEHeDqK6qavX3JLT1evuViK4sA9Z8jutoHhr3rsiujZG/wCkXe89/wAgaKeJooua8FmYaGZv4au8IKn8OuPVIn8OqHVI9IND2dhBbBGCNRwgkdZzUiouC8FmfkJm/iq3xAKTCnFxflx7FkXF+X7H6ue12pkTC97g1o1k/LiV9WidsbS97g1o1k6hsVKvnpNk3k2xyBzRiJwnbkBXqr2lRtsUI5IW2KEcko6+UNaBjyN+Q/VWdY9iWnfxBZft2dqpoucs7mv9FOnvcs72u38EiTTMqiaVvTK9xETsDAciAC53Ek6ugK36YNIJT/8AU/wlZWHLmqnJYSOauyUcJcGhXPtb5YnGRxcQ+gJ3YWmnerAqvcI+Zf8AE/a1WhXU/LRfQ81xbCLzkkDQS4gAayTQDrKjZbxWVpoZgfdDnd7QVNyS6sm5Rj1ZLIo6z6bs8ho2VtdgJwk9AdRSK6mnyjqafKCIi6dCIiAIiIAiIgCIiA8pYg8FrgCCCCDqIOsFZ7p66EkRL4AZI9eEZvbwp/MOjPhtWjoq7KozXJXZVGxcmIuyNDkRrB1jpSq17SGiIbR9LE1x36nDocM1VtJXCGZglp92TV1OGrrBWSWmkunJhnpJrpyUoGme1WLQ175oSGyEyx7cWTwODjr6D2hQFusskDzHI0tcNh3bwdRHELwqqouUHxwURlKD44NpsNrZMxskbsTXDI/odxG5ct4raYLNJI31gABwLnBoPVir1Kmcnmki2Z0BPNe0uA3Pbu6W1/pCs99z6FN+D81i3KzdW5d+T0lbuqcl1w/9GaOeSSSSSTUk5kneTtWl3J9jj6X/AJjll+JadcU+hRdL/wAxyz6VeP2/4ZNIv8nt+Ued79PGzNEcZ868Vr9RurF0nUOg7lnjnlxJJJJNSSakneSda7bzWsy2qZ255YOhnNy7CeteWhbAbVMyIGlc3Hc0Zk/p0kKu2Tsnj2RC6bsnj2Ry4lJ6O0u6KOWEkmOSNwp9VxBoRuz19NVodm0FZ424RAw8XAOJ6S7NVq+F3I2RmeFuDDTG0eqQTTEBsIrqGVFN6ecFuTLHp5wW5MqGJaBcA+jO+MfAxZxiWi8nh9Gd8Z3hYuab5nsyOl+Z7Mkrw6XFljxa3uyY3edpPAZdw2rO7XbXzOxyOLjx2cANg4BSN9bYX2pzdkYDR2Yj3u7lxaAsbbROyNxo3MuzpkBWleOQ60uk7J7UL5uye1fXByg11Zr8xrWoDGxoawsa0agCAAqffuwxBrZ2YQ4vwvDac6oNHEDblSvFJ6ZxjnJKzSuMd2cn1da8bsTYJnYg7JjjrB2NcdoOw6691yliDtdepzm/IhY2XrXdFWnysMch1uY0npIz76q7TWOScX2LdLY5Jxl2KjygWOONsTmxtDi51XADEctp1lUzErzymHzcPvu+QVCxKi9eNmfUrFjLhydHz8nw/wBzVoKzvk3Pn5Ph/uatEWrT/L/s2aX5a9yBvt7FN+D81iy9afff2Kbpj/NYstxKjU+dei/Jl1i/yL0/LJu6XtkPvHwOWrLJboH0yH3j4HLWlbpfK/Uv0fkfqZdeDSDp53knmtcWsGwNBp2mlSpe4B89J8P9wVWtbvOP993iKsvJ4fPSfD/cFmqebU39f+mal5uTf1ZflX75aQdDAAw0L3YajWBQk045U61YFUuUQ+aj98+Erbc2oPBvvbVbwUnEtW0T9BF8JngCyMuWt6G9nh+EzwBZtJ1Zl0XmZSL1aZdNK6MGkbHFtB/MQaFx356lD2WzvlOGNjnnc2ppxO5eekozHNIx2sSOHec+vX1qaunp+Oy42yNNHkHE0VpTKhGunQqfPZ42UeezxvH70Im0QPiOGRjmHc4EV4iutSd3tPOszg1xJiJ5zfq/ebu6NquD7XZLa3AZGPrqBOFwO8A0cCoie4rSeZO5o3OaHHtBCt+BOL3VvJd/55xe6t5/ol71uBscp2Ub42rMw5avY7CGQtheRIGtDTibk4DVVprqy7FTOUCzsifCGMayrXVwgNrm3XRT1Fba3k9VW2t/2K3iXyXrya7Na+dFwfYR/wDG3+yorpdmcMzVUu3OH0Gm/Z5vhP8AAVk2Jaxpz2ab4MngKx/GrtXzJF+s8yNE5PT5h/xf2MU7pTSDbNE6R+zUNrnHU0KA5OT6PJ8U+Bij+UK2EyRxbGsxnpcSB2Bp7VYp7KU/4LVPZQpfwQuk9KyWl2KR2Wxo9VvQP11rkaa6s+hflih8rIyOtMTw2u6poT1LVrDBFAwMjwtA4ip4k7TxWaul2ZbZlqplc22zKcSn7uXjdA4MkcXRHLPMs4jhw7OM3fSxRPhdKMPlGUNQRVwqAQd+uvUs/wAS5KMqZ8M5OMqZ8M2gL9UHc61GSyR11tqz+k0HdRTi9KMtyyj04y3JNBERdJBERAEREAREQFUvzpaeyiJ0LgA4uDqtBzyLdf4lV4772tpqXMdwcwU/60Kvl59Ff+VZ3Rj1hzmE7HjV21I61j0jHMcWuBa5pIIOsEawVkuc4yynwYNTKyE8pvDNPu/fGK0kRyDyUhyGdWuO5p2HgeolWlYJVT9kvja4m4RKHAZDG0OI69Z66rsNRxiR2vV9plk5TQzBCcseNwG/DTPvw9qoFV7aQ0hLaH45Xl7qUz1AbgBkB0LlqqLJbpZM10983JFguVU22Gm93Z5N6vd+vYZumP8ANYq9ybaKNXWpwyoWR8TXnOHRSnW7cp+/x9Am/wBv81ivrjip+/8Ao1VRaok33Tf2MrxLVLhexRe9J+Y5ZLiWscn/ALDF70n5jlDT+f2K9J8z2/KM70vlPMDslf4yprk9lAtdD/NG9o6atd8mleF/NHmG1OfTmS89p45B46a5/iCr8E7o3Nexxa5pBBGwhVeSznsyvLrsz9Gbqoi9coZZJydsZaOl3NHeQqvZeUSjaSQVdTWx1AeojLtKgbxXmkttGkBkYNQwGtTvcdu3YFqnfHbwa7NTDa8PkiarR+Tj2V/xj4GLMsS0vk19lf8AHd4GKnT+cz6T5nsVK9NRa5wfr17QCPmufRGjnWqQRNLQSCRirTLZkCp3lF0cWSttAHNeA1x3PaMq9Laf0lVfR1udBKyVnrNNRXUdhB4EEjrUJxSse7oV2RUbWpfX7Fp/gKb7SLtd/iv0XDn+1j7Xf4qVhv8A2ctq5kjXbWgB2fA1Feuirmmr5TzkiMmGPYGnnni5w1dA71ZKNCXHJdKOmisrn0Z3/wACWj7WP/t/irpoeyGCCOJxBLWAEjVXbSqyewGe0StiZI8ue6lcbjQbXHPUBU9S2KGMMaGjUAAK7gKKyhReWlgt021tuKx75KdynHzcPvu8IWfYlf8AlR+jg993hWd4lTf52ZtT81l15ND5+X4f72rR1mvJifSJfhfvatKWmjyf2bNL8te5X79n0Gbpj/NYsoxLVb/ewTf7f5rFkuJUaleP2Mur869Pyyeuc702D3j4HLXljtzXenQe8fA5bErdN5fc0aPyv1MWtrvOSfEd4irNycv89INvk69jh/cKv3msxhtUzD9cuHuvOIfOnUufRek32aVsrNY2HU4HW0rLB7LMvszHCWyzL7M2tU3lJeBHCNpkJ6g3P5hfjOUGDDnFIHbhhIr7xIPcqfp/Tb7XJjcMLQKMaDUNHTtJ38BuWm62Lg0jXfdBwaTzk4sa2LQns8PwY/AFi+JbPoL2aD4MfgChpurK9H1ZH3gu1HaufXBJSmICoI2Bw29OtVG2XOtUfqtbIPuOAPY6ndVcmktL2yzTvjNokqxxAqQajW00IpmCD1qb0HfvPBahTdIwH/s0fMdiSdU3zwxKVNkvEmmVO12WSI0kjcw/eaRXorr6l26IvBPZiMLy5m1jiS0jcPq9I71crx3hsj7NI3yrJC5hDWtzOI+qfu0NDU7lmWNVTj8OXhZTZH4UvBL99jbdHWts8bZW+q4VG8bweINR1Kk8pp85B7j/AJtU7cJpFijrtc8joxn/ANqF5UITSCTYC9h6ThcPC7sWq17qs+hsue6jPoUlrsx0rc1guJXiLlGIaMdnDnAZkSUBO+mE07VTRZGOcmfTWxhnc/p+S5ae9mn+DJ4CsaxLZNPitmnA1+Rf4CsUxLup6olrOqNM5NT6PJ8U+BiheUHK1DjG0jtcP0UxyYn0eT4x8DF88o+ji6NloaK+T5r/AHTqd1HxKUo5pRKSzpkUqxQGaRkYIBe4NBOqpyFaKyfwFN9pF2u/xVQjmLSHNNCCCDuINQVoNgv/AAlg8sx7X0zwDE0nhnUdB7Sqao1viZnpjVLO8jf4Dn+0i/7f4r6/gS0fax9rv8V4acvxJLzbPWJm1xpjPzDR0Z8Qq4LZM9wAke5ziAOe4kkmgGvMrsvhLos+5KToTwk37mq3Z0Y6yw+TeWl2Mu5taZ03gblMLg0LZDBBHG41c1vOJNauObszxJXetsVhJHowWIpBERSJBERAEREAREQBV68V1obZzj5uWlA9orXcHj+Ydh4qwouOKksMjKKksMyLSFzLZETSMSt3xkeE0PYCop+irQNcEo6Y3j9FuSKh6eP1Mz0cOzZiVm0FapDRtmk62Fo/qdQd6tOgrguJD7U4Bv2bDUng541dVekLREXY0RXXk7HSQXL5PKGJrGhrQGtAoABQADUAFz6VsLbRC+F2p7aV2g7HDiDQ9S7UV7WeDTjjBjduujbInFvkTINjo6OBG+msdBWiXHsz4rHGyRhY4F9WuFCKyOI7iFYEVcKlF5RTXp41y3IjdOaIjtcRik6WuGtrtjgsz0pdC1wE0jMrdjoxir0s9YHqPSVryLk6oz6nbaI2depiMGhLU80bZpa8Y3NHWXAAdqu12rlCNrnWihe9jmBrTUMDgWk12uoSMshnrV4RchRGLz1IV6aMXl8mP2+6VrieWiIyNrk9mYI4itWnge9Xbk+sckNne2VjmOMxIDhQkYGCvaD2K1IuwpUZZRKvTxhLcmc1ssjJmOjkaHMcKEH/APd6znTNxZ4yTB51mwVAeOmtA7pHYtPRdnXGfUnZVGzqYi/Q9paaGzy/8bz3gZru0ddS2TEeZMY+tJzAOo87uWwIqlpo/UoWjh3bIC7V247G2oOOR2TnkUy+q0fyj59lJ9EWiMVFYRqjFRWEQV7dDm2QFjaeUaQ9ldWIA809IJHYdix+djo3Fj2lrmmha4UI6Qt9XHbdHQzU8rEySmrGwOp0V1Kqyre8oz36f4jynhmfclp9Il+F+9q01cNi0XBCS6KGOMkUJYwNJGuhoF3KdcdscFlNbhDazh0zYBaYJISaY20B3HW09RAPUsUt9kks8hilaWvGw7RvadoO9byuW2WGKYYZY2SAag9ocB0VGSjZUpkL6FZznkyO5TvT4Pff+W5bMo2DQtmjcHss8TXDU5sbQRlTIgZaypJdqg4LDO0VOuLTffJXL2XbFsaHNIbK0Ua46iK1wups3HZU71ndsu9a4jR1nkPFjTIDxqyvetnRcnTGbyLdPGx56Mx3R917XMQBC5g2ukBYBxo7M9QKttruUBZPJRuBmDxIXnIPcARh+62hNOPSVdUXI0RRyOmhFPPOTGH3btgNDZpOoVHaDQrWNCxltnha4EERMBB1ghgBBXei7XUodCVVKrzhldvRdllsAcDglaKB1Kgj6rxtHHZXqWf266tshJrA543s54PQBzu0BbEiTpjJ5OWaeE3nozEG6HtJNBZ5f+N/9lP6FuPPK4GceSj2ioL3DcAKhvSexagigtPFdWQjpIJ85Z4wQtja1jQA1oAAGoACgC59LaOZaYnRSDmu2jW0jMOB3hdyK/HY0tJrDMm0lci1xE4GiZuxzCAacWuOR6KqMfdy2UPo0vYtsRUvTxZllo4Pu/31PkivQstvBcieJ5dZ2+ViJqACMbPukE84biKnetURWTgp9S+2qNi5KlydWGWCCRssbmEy1AcKEjAwV7irTIwOBBAIIoQcwQdYI2r0RSitqwShHZFJdjO9PXEeCX2UhzTn5NxoRwa45EdNOkqrzaFtTDR1ml6o3OHa0ELbEVMtPF9ODPLSwbyuDGbHdu1zGjbO9vGQeTA48+h7Kq+XYuiyy+dkIkm2EeqzfhrrP3j2DOtqRdhTGLySr08IPPVhERXGgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//2Q==",
    desctiption: "SideHustle Project Google Homepage clone.",
    link: "side-hustle-project.netlify.app/",
},

{
    img: "https://d33wubrfki0l68.cloudfront.net/649dbc55708a7511980ee66d/screenshot_2023-06-29-17-16-55-0000.png",
    desctiption: "Crypto Data Api.",
    link: "https://crypto-data-api.netlify.app/",
},


{
    img: "https://d33wubrfki0l68.cloudfront.net/64a9a1ec4bbc522065702c97/screenshot_2023-07-08-17-51-47-0000.png",
    desctiption: "Heavy-Equipment Rental.",
    link: "https://heavy-equipment.netlify.app/",
},

{
    img: "https://sound-sultan-biography.netlify.app/img%20/Sound-Sultan.jpeg",
    desctiption: "Sound Sultan Biography.",
    link: "sound-sultan-biography.netlify.app/",
},

{
    img: "https://d33wubrfki0l68.cloudfront.net/6458fd3ce9789a3b3ffa4f4a/screenshot_2023-05-08-13-47-48-0000.png",
    desctiption: "A Realtor Website.",
    link: "https://ogudu-real-estate.netlify.app/",
},



{
    img: "https://d33wubrfki0l68.cloudfront.net/643e9153da80665b06b006bb/screenshot_2023-04-18-12-48-21-0000.png",
    desctiption: "A Female Gym Site.",
    link: "https://female-gym-website.netlify.app/",
},

{
    img: "https://rentaling-drones-f5jmdec1m-samuels-projects-3560e82c.vercel.app",
    desctiption: "Drone Rentaling App.",
    link: "https://rentaling-drones.vercel.app/",
},

{
    img: "https://d33wubrfki0l68.cloudfront.net/66cf712b43217a0d505cd40e/screenshot_2024-08-28-18-50-24-0000.webp",
    desctiption: "Insurance-claim.",
    link: "https://insurance-sam.netlify.app/",
},

];


const contactConfig = {
    YOUR_EMAIL: "ifaduolas@gmail.com",
    YOUR_FONE: "(+234) 08024875563",
    description: "I'm waiting for your calls . ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    link: "https://github.com/Ifaduolas",
    facebook: "https://facebook.com/ifaduola sameo samuel",
    linkedin: "https://linkedin.com/in/ifaduolas",
    twitter: "https://twitter.com/sammy4riner",
    discord: "https://discord.com/sammy4riner",
    instagram: "https://instagram.com/sammy4riner",
    twitch: "https://instagram.com/sammy4riner070",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
