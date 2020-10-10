import MenuIcons from '../../assets/icons/menu'

/*Criação do menu em array para poder iterar e utilizar componentes*/
const menuFactory = [
    {
        id: 1,
        name: 'phraseGuide',
        text: 'phraseGuideMenu',
        icon: MenuIcons.find(value => value.name === "phraseGuide").value,
        existScreen: true,
    },
    {
        id: 2,
        name: 'wordGuide',
        text: 'wordGuideMenu',
        icon: MenuIcons.find(value => value.name === "wordGuide").value,
        existScreen: false,
    },
    {
        id: 3,
        name: 'legalizeSituation',
        text: 'legalizeSituationMenu',
        icon: MenuIcons.find(value => value.name === "legalizeSituation").value,
        existScreen: false,
    },
    {
        id: 4,
        name: 'validateStudies',
        text: 'validateStudiesMenu',
        icon: MenuIcons.find(value => value.name === "validateStudies").value,
        existScreen: false,
    },
    {
        id: 5,
        name: 'brazilMap',
        text: 'brazilMapMenu',
        icon: MenuIcons.find(value => value.name === "brazilMap").value,
        existScreen: false,
    },
    {
        id: 6,
        name: 'jobs',
        text: 'jobsMenu',
        icon: MenuIcons.find(value => value.name === "jobs").value,
        existScreen: false,
    },
    {
        id: 7,
        name: 'numbers',
        text: 'numbersMenu',
        icon: MenuIcons.find(value => value.name === "money").value,
        existScreen: false,
    },
    {
        id: 8,
        name: 'information',
        text: 'informationMenu',
        icon: MenuIcons.find(value => value.name === "information").value,
        existScreen: false,
    },
    {
        id: 9,
        name: 'network',
        text: 'networkMenu',
        icon: MenuIcons.find(value => value.name === "network").value,
        existScreen: false,
    },
]

export default menuFactory;


