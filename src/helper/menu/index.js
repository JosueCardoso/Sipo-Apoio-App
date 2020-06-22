import MenuIcons from '../../assets/icons/menu'

/*Criação do menu em array para poder iterar e utilizar componentes*/
const menuFactory = [
    {
        id: 1,
        name: 'phrase guide',
        text: 'phraseGuideMenu',
        icon: MenuIcons.find(value => value.name === "phraseGuide").value
    },
    {
        id: 2,
        name: 'word guide',
        text: 'wordGuideMenu',
        icon: MenuIcons.find(value => value.name === "wordGuide").value
    },
    {
        id: 3,
        name: 'legalize situation',
        text: 'legalizeSituationMenu',
        icon: MenuIcons.find(value => value.name === "legalizeSituation").value
    },
    {
        id: 4,
        name: 'validate studies',
        text: 'validateStudiesMenu',
        icon: MenuIcons.find(value => value.name === "validateStudies").value
    },
    {
        id: 5,
        name: 'brazil map',
        text: 'brazilMapMenu',
        icon: MenuIcons.find(value => value.name === "brazilMap").value
    },
    {
        id: 6,
        name: 'jobs',
        text: 'jobsMenu',
        icon: MenuIcons.find(value => value.name === "jobs").value
    },
    {
        id: 7,
        name: 'numbers',
        text: 'numbersMenu',
        icon: MenuIcons.find(value => value.name === "money").value
    },
    {
        id: 8,
        name: 'information',
        text: 'informationMenu',
        icon: MenuIcons.find(value => value.name === "information").value
    },
    {
        id: 9,
        name: 'network',
        text: 'networkMenu',
        icon: MenuIcons.find(value => value.name === "network").value
    },
]

export default menuFactory;


