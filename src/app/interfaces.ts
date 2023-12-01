// export interface qualification {
//     timelapse: String;
//     url: String;
//     label: String;

//     rol: String;
//     rol1: String;
//     rol2: String;

//     description: String;
//     skills: [];
//   }

export interface sectionData {
  header: headerData;
}

export interface headerData {
  htmlId: string;
  title: string;
  paragraph?: string;
}

export interface project {
  label: string;
  description: string;
  image: string;
  skills: string[];
  url: string;
}
