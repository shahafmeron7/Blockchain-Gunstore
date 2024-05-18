const dummyWeapons =[
   
      {
        account_metamask_address: "0x8A75a0399C17773e6d990b019b2eb3E35212A6DA",
        timestamp: new Date("2024-05-01T12:00:00Z"),
        weapon_name: "Vortex Cannon",
        weapon_type: "Cannon",
        weapon_training: {
          shooting_range: 5,
          basic_training: 10,
          advanced_training: 3,
          idle_time: 1
        },
        weapon_price: 1500,
        old_price: 1400,
        weapon_url: "https://example.com/vortex_cannon.jpg",
        weapon_for_sale: true,
        last_modified: new Date("2024-05-10T15:00:00Z"),
        count_training: 18
      },
      {
        account_metamask_address: "0xabcdef1234567890abcdef1234567890abcdef12",
        timestamp: new Date("2024-04-20T08:30:00Z"),
        weapon_name: "Plasma Rifle",
        weapon_type: "Rifle",
        weapon_training: {
          shooting_range: 8,
          basic_training: 15,
          advanced_training: 5,
          idle_time: 2
        },
        weapon_price: 2200,
        old_price: 2000,
        weapon_url: "https://example.com/plasma_rifle.jpg",
        weapon_for_sale: false,
        last_modified: new Date("2024-05-02T11:00:00Z"),
        count_training: 28
      },
      {
        account_metamask_address: "0x9876543210abcdef9876543210abcdef98765432",
        timestamp: new Date("2024-05-15T10:00:00Z"),
        weapon_name: "Electro Dagger",
        weapon_type: "Dagger",
        weapon_training: {
          shooting_range: 0,
          basic_training: 0,
          advanced_training: 0,
          idle_time: 0
        },
        weapon_price: 300,
        old_price: 300,
        weapon_url: "https://example.com/electro_dagger.jpg",
        weapon_for_sale: true,
        last_modified: new Date("2024-05-15T10:00:00Z"),
        count_training: 0
      }
    
    
]
module.exports = dummyWeapons;
