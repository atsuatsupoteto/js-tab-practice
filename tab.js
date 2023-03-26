 (()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIV_CLASS = 'is-active';
    const navLen = $nav.length;

    const init = () => {
        $content[0].style.display = 'block'
    };
    init();

    //クリックイベント
    const handleClick = (e) => {
        e.preventDefault();

        //クリックされたnavとそのdataを取得する
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        console.log('targetVal',targetVal);

        //対象外のnav,contentを全て一旦リセットする
        for(let index=0; index<navLen; index++){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIV_CLASS);

        }


        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIV_CLASS);
    };

    for(let index=0; index<navLen; index++){
        $nav[index].addEventListener('click', (e) => handleClick(e));
    }

 })();