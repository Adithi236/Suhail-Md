const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94728663697";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_44_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpalBLdlNmeG14S1ppSkloZ2h1RjBtb2x4cHhwT0hBZ2ZxVFpXNHdoOFZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4NjYzNjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQkY0MjlCNTlFMDYzNDVFQjhBNTY1MTc3QjFBNkZERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxOTk4NTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTNUNWl0aHJSWHlEM2szMjZhX1I3Z1wiLFxuICBcInBob25lSWRcIjogXCJiMzhiMzRiYi1kMWIxLTQ0NDMtYjA3YS05ZTQ2NmRiMDllMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDIzMCxcbiAgICAgIDI5LFxuICAgICAgMTI1LFxuICAgICAgMjQ2LFxuICAgICAgMTA5LFxuICAgICAgNDcsXG4gICAgICAyNTEsXG4gICAgICAxMSxcbiAgICAgIDc5LFxuICAgICAgMjE1LFxuICAgICAgMjA3LFxuICAgICAgOTMsXG4gICAgICAzMixcbiAgICAgIDg2LFxuICAgICAgNzQsXG4gICAgICAxOTgsXG4gICAgICAyNTEsXG4gICAgICAxMyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjE3LFxuICAgICAgMTcsXG4gICAgICAxNzcsXG4gICAgICA0OCxcbiAgICAgIDIyMCxcbiAgICAgIDg4LFxuICAgICAgMTc1LFxuICAgICAgMTY1LFxuICAgICAgMjA4LFxuICAgICAgMzYsXG4gICAgICA5MSxcbiAgICAgIDExMyxcbiAgICAgIDU5LFxuICAgICAgMTQyLFxuICAgICAgMTg4LFxuICAgICAgMTM4LFxuICAgICAgMTU2LFxuICAgICAgNzMsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UEQyUUhSOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjg2NjM2OTc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MDA3MjYwNzM3NzEzOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi6qq28J2Rqs2i8J2cs/CdnJ3wnZyp8J2Ruc2iIOOAhUFDSElZQSBNT0RaLVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yUmxQd0RFS3ZNcHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOW1qbWJOdjhJQjMvNzB6d1h3b0V5VTA3L3hxdERDSVEyRDZiRTlHaW4wdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYSjRkS2Z6c0dGSFQxR002VGs5dU84TGFYU1FKaWZVMnpOdURXZHhRU0t6cGJrNmZsL2UrZFpEQ2gzc0ZoT0NIc0hOUFBMdDdhNFFuQWd4OUt2UUpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpcGl0d3VCK0txSnZUZC9tdzF2T1hGUk9jcmpZNzFjeURzb2F1SkhTRzdMeXc5MVhYUnBTbTl4U2UvRk5VNU1IT2Y0VzE3VFkxK29ZdllrNkl2UEJDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyODY2MzY5Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgxOTk4NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFETjlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUROOS5qc29uIjogIntcImtleURhdGFcIjpcIk9tenJqU214a1dMRWFqbDhnV3NpQ00rdFNLaUUzRkVxdWUxUDU3aVJ4MDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2NTY4MzE2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MTk5ODU2Nzg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
