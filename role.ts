export class PartSideMenuComponent implements OnInit {
  links: any[] = [];

  ngOnInit() {
    this.setUserLinks();
  }

  setUserLinks() {
    const userRole = this.getUserRole(); // ユーザーの権限を取得するメソッド
    this.links = [...this.getCommonLinks(), ...this.getLinksForRole(userRole)];
    this.links.sort((a, b) => a.order - b.order);
  }

  getCommonLinks() {
    return [
      { title: '共通リンク1', route: '/common1', order: 1 },
      // ...その他の共通リンク
    ];
  }

  getLinksForRole(role: string) {
    const roleLinks = {
      'role1': [
        { title: '特定リンク1', route: '/specific1', order: 2 },
        // ... role1のリンク
      ],
      'role2': [
        // ... role2のリンク
      ],
      // ... 他の権限のリンク
    };

    return roleLinks[role] || [];
  }

  getUserRole(): string {
    // ユーザーの権限を取得するロジック
    return 'role1'; // 例
  }


//   // 各権限に応じたリンクを取得するメソッド
// getLinksForAtUser(atuser: number) {
//   // 'atuser' 権限に応じたリンクを返す
//   // ...
// }

// getLinksForPermission(permission: number) {
//   // 'permission' 権限に応じたリンクを返す
//   // ...
// }

// setUserLinks() {
//   const userRole = this.getUserRole(); // { atuser: 1, permission: 2 } のような形式
//   let links = [...this.getCommonLinks()];

//   if (userRole.atuser) {
//     links = [...links, ...this.getLinksForAtUser(userRole.atuser)];
//   }

//   if (userRole.permission) {
//     links = [...links, ...this.getLinksForPermission(userRole.permission)];
//   }

//   // 重複を排除し、必要に応じて並び替え
//   this.links = [...new Set(links.map(link => JSON.stringify(link)))]
//     .map(str => JSON.parse(str));
//   // ここで、必要に応じてリンクの順序を並び替えることができます
// }




// getUserRoleDescription(userRole: { atuser: number, permission: number }): string {
//   let roleCodes = [];

//   if (userRole.atuser === 1) {
//     roleCodes.push('AH'); // 'アットホーム'の略
//   }

//   switch (userRole.permission) {
//     case 1:
//       roleCodes.push('RO'); // '読み取り専用'の略
//       break;
//     case 2:
//       roleCodes.push('RW'); // '読み書き可'の略
//       break;
//     // 他の権限レベルに対するケースも追加できます
//     default:
//       roleCodes.push('UNK'); // '不明な権限'の略
//   }

//   return roleCodes.join('-'); // 形式: 'AH-RW'
// }

// setUserLinks() {
//   const userRole = this.getUserRole(); // { atuser: 1, permission: 2 } のような形式
//   const roleCode = this.getUserRoleDescription(userRole);

//   console.log(roleCode); // 'AH-RW' と出力される
//   // ここで roleCode を使用して、適切なリンクを設定する
// }


}