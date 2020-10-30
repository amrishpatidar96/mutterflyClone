
const styles =(theme)=>({
    root: {
      display: 'flex',
    },
    toolbar:{
        display: 'flex',
        [theme.breakpoints.between('sm','md')]:{
          minHeight:'170px',
          flexDirection:'column',
          alignItems: 'start',
          alignContent: 'space-between'
        },
        [theme.breakpoints.between('lg','xl')]:{
          minHeight:'60px'
        },
        
  },

    homeAndTitle:{
      color:theme.palette.secondary.main,
      display: 'flex',
      flexDirection:'row',
      flexGrow:'0.1',
      justifyContent: 'space-evenly',
      [theme.breakpoints.between('sm','md')]:{
        width:'15%'
      },
      [theme.breakpoints.only('xs')]:{
        flexGrow:1,
      }
  },

    homeIcon:{
      [theme.breakpoints.only('xs')]:{
        display:'none'
      }
    },
    title:{
      fontSize:'20px',
      fontWeight:'bold',
      fontStyle:'roboto'
    },
    menuButton: {
      [theme.breakpoints.up('sm')]:{
        display: 'none'
      },
    },
    search1: {
      flexGrow:0.8,
      borderRadius: '5px',
      border:'1px solid #ededed' ,
      '&:hover':{
          border:'1px solid'+theme.palette.secondary.main ,
          boxShadow:'0 0 0 2px rgba(215,4,102,.2)'  
      },
      height: '45px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.between('sm','md')]:{
        flexGrow:0.3,
        width: '70%',
      },
      [theme.breakpoints.only('xs')]:{
        flexGrow:0,
        border:'none',
        '&:hover':{border:'none',boxShadow:'none'},
      }
    },
    searchInput:{
      [theme.breakpoints.only('xs')]:{
        display:'none'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
    },

    SelectAndBtn:{
      flexGrow: '0.2',  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [theme.breakpoints.between('sm','md')]:{
        flexGrow:0.3,
        width: '30%',
        justifyContent: 'space-between',
      },
      [theme.breakpoints.only('xs')]:{
        display:'none'
      }
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }

  });

  export default styles;