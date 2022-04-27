(() => {

  function createHeader() {

    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'container';

    const wrapper = document.createElement('div');
    wrapper.className = 'header__wrapper';

    const logo = document.createElement('div');
    logo.className = 'header__logo';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '12');
    circle.setAttribute('fill', '#9873FF');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M8.28545 13.8396C8.28545 14.3234 8.1167 14.6918 7.7792 14.9449C7.44451 15.198 6.94248 15.3246 6.27311 15.3246C5.92998 15.3246 5.63748 15.3007 5.39561 15.2529C5.15373 15.2079 4.92732 15.1404 4.71639 15.0504V13.9873C4.95545 14.0998 5.22404 14.194 5.52217 14.2699C5.82311 14.3459 6.08748 14.3838 6.31529 14.3838C6.78217 14.3838 7.01561 14.2488 7.01561 13.9788C7.01561 13.8776 6.98467 13.796 6.92279 13.7341C6.86092 13.6695 6.75404 13.5977 6.60217 13.519C6.45029 13.4374 6.24779 13.3432 5.99467 13.2363C5.63186 13.0845 5.36467 12.9438 5.19311 12.8145C5.02436 12.6851 4.90061 12.5374 4.82186 12.3715C4.74592 12.2027 4.70795 11.996 4.70795 11.7513C4.70795 11.3323 4.86967 11.0088 5.19311 10.781C5.51936 10.5504 5.98061 10.4351 6.57686 10.4351C7.14498 10.4351 7.69764 10.5588 8.23482 10.8063L7.8467 11.7345C7.61045 11.6332 7.38967 11.5502 7.18436 11.4855C6.97904 11.4209 6.76951 11.3885 6.55576 11.3885C6.17607 11.3885 5.98623 11.4912 5.98623 11.6965C5.98623 11.8118 6.0467 11.9116 6.16764 11.996C6.29139 12.0804 6.55998 12.2055 6.97342 12.3715C7.34186 12.5205 7.61186 12.6598 7.78342 12.7891C7.95498 12.9185 8.08154 13.0676 8.16311 13.2363C8.24467 13.4051 8.28545 13.6062 8.28545 13.8396ZM10.5256 12.6752L11.0867 11.958L12.4072 10.5237H13.8584L11.9853 12.5698L13.9723 15.2402H12.4873L11.1289 13.3291L10.5762 13.7721V15.2402H9.28951V8.67586H10.5762V11.6037L10.5087 12.6752H10.5256ZM17.2714 10.4351C17.8283 10.4351 18.2642 10.653 18.5792 11.089C18.8942 11.5221 19.0517 12.117 19.0517 12.8735C19.0517 13.6526 18.8886 14.2559 18.5623 14.6834C18.2389 15.1109 17.7973 15.3246 17.2376 15.3246C16.6836 15.3246 16.249 15.1235 15.934 14.7213H15.8454L15.6303 15.2402H14.6473V8.67586H15.934V10.203C15.934 10.3971 15.9172 10.7079 15.8834 11.1354H15.934C16.235 10.6685 16.6808 10.4351 17.2714 10.4351ZM16.8579 11.4645C16.5401 11.4645 16.3081 11.5629 16.1619 11.7598C16.0156 11.9538 15.9397 12.2759 15.934 12.7259V12.8651C15.934 13.3713 16.0086 13.7341 16.1576 13.9535C16.3095 14.1729 16.5486 14.2826 16.8748 14.2826C17.1392 14.2826 17.3487 14.1616 17.5034 13.9198C17.6609 13.6751 17.7397 13.3207 17.7397 12.8566C17.7397 12.3926 17.6609 12.0452 17.5034 11.8146C17.3459 11.5812 17.1308 11.4645 16.8579 11.4645ZM19.9334 14.637C19.9334 14.4007 19.9967 14.2221 20.1233 14.1012C20.2498 13.9802 20.434 13.9198 20.6759 13.9198C20.9094 13.9198 21.0894 13.9816 21.2159 14.1054C21.3453 14.2291 21.41 14.4063 21.41 14.637C21.41 14.8591 21.3453 15.0349 21.2159 15.1643C21.0865 15.2909 20.9065 15.3541 20.6759 15.3541C20.4397 15.3541 20.2569 15.2923 20.1275 15.1685C19.9981 15.042 19.9334 14.8648 19.9334 14.637Z');
    path.setAttribute('fill', 'white');

    const search = document.createElement('input');
    search.className = 'header__search';
    search.setAttribute('type', 'text');
    search.setAttribute('placeholder', 'Введите запрос');

    svg.append(circle, path);
    logo.append(svg);

    wrapper.append(logo, search);
    container.append(wrapper);
    header.append(container);

    return header;
  }

  function createCRM(clients) {

    const main = document.createElement('main');
    main.className = 'main';

    const section = document.createElement('section');
    section.className = 'clients';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.className = 'clients__title';
    title.textContent = 'Клиенты';

    const table = document.createElement('div');
    table.className = 'table clients__table';

    const tableHeader = document.createElement('div');
    tableHeader.className = 'table__header';

    function createTableColHeader(className, text, sortable = true) {

      const colHeader = document.createElement('div');
      colHeader.className = 'table__col-header';

      if (sortable) {
        const button = document.createElement('button');
        button.className = `btn table__col-sort-btn ${className}`;
        button.textContent = text;

        colHeader.append(button);
      } else {
        colHeader.classList.add(className);
        colHeader.textContent = text;
      }

      return colHeader;

    };

    tableHeader.append(createTableColHeader('table__col-id', 'ID'));
    tableHeader.append(createTableColHeader('table__col-name', 'Фамилия Имя Отчество'));
    tableHeader.append(createTableColHeader('table__col-created', 'Дата и время создания'));
    tableHeader.append(createTableColHeader('table__col-changed', 'Последние изменения'));
    tableHeader.append(createTableColHeader('table__col-contacts', 'Контакты', false));
    tableHeader.append(createTableColHeader('table__col-actions', 'Действия', false));

    table.append(tableHeader);

    function createTableRow({ id, createdAt, updatedAt, name, surname, lastName, contacts }) {

      const row = document.createElement('div');
      row.className = 'client table__row';

      const idCol = document.createElement('div');
      idCol.className = 'client__id table__col';
      idCol.textContent = id;

      const nameCol = document.createElement('div');
      nameCol.className = 'client__name table__col';
      nameCol.textContent = `${surname} ${name} ${lastName}`;

      const createdCol = document.createElement('div');
      createdCol.className = 'client__created table__col';
      createdCol.textContent = `${createdAt.slice(8, 10)}.${createdAt.slice(5, 7)}.${createdAt.slice(0, 4)} `;

      const createdTime = document.createElement('span');
      createdTime.className = 'gray-text';
      createdTime.textContent = `${createdAt.slice(11, 16)}`;

      createdCol.append(createdTime);

      const changedCol = document.createElement('div');
      changedCol.className = 'client__created table__col';
      changedCol.textContent = `${updatedAt.slice(8, 10)}.${updatedAt.slice(5, 7)}.${updatedAt.slice(0, 4)} `;

      const changedTime = document.createElement('span');
      changedTime.className = 'gray-text';
      changedTime.textContent = `${updatedAt.slice(11, 16)}`;

      changedCol.append(changedTime);

      const contactsCol = document.createElement('ul');
      contactsCol.className = 'lst client__contacts table__col';

      function createVkIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createFbIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createTelIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '8');
        circle.setAttribute('cy', '8');
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', '#9873FF');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z');
        path.setAttribute('fill', 'white');

        svg.append(circle, path);
        return svg;

      }

      function createEmailIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createOtherIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createIcon(type) {

        switch (type) {
          case 'vk':
            return createVkIcon();
          case 'fb':
            return createFbIcon();
          case 'tel':
            return createTelIcon();
          case 'email':
            return createEmailIcon();
          case 'other':
            return createOtherIcon();
          default:
            return null;
        }

      }

      contacts.forEach((contact) => {

        const item = document.createElement('li');
        item.className = 'client__contact';

        const button = document.createElement('button');
        button.className = `btn client__contact-btn client__${contact.type}`;

        button.append(createIcon(contact.type));

        const tooltip = document.createElement('div');
        tooltip.className = 'client__contact-tooltip';

        const tooltipText = document.createElement('span');
        tooltipText.className = 'contact__tooltip-text';
        tooltipText.textContent = `${contact.type}: `;

        const tooltipLink = document.createElement('a');
        tooltipLink.className = 'contact__tooltip-link';
        tooltipLink.href = '#';
        tooltipLink.textContent = contact.value;

        tooltip.append(tooltipText, tooltipLink);
        item.append(button, tooltip);
        contactsCol.append(item);

      });

      const actionsCol = document.createElement('ul');
      actionsCol.className = 'lst client__actions table__col';

      const editItem = document.createElement('li');
      editItem.className = 'client__edit';

      const editButton = document.createElement('button');
      editButton.className = 'btn client__edit-btn';

      const editButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      editButtonSvg.setAttribute('width', '16');
      editButtonSvg.setAttribute('height', '16');
      editButtonSvg.setAttribute('viewBox', '0 0 16 16');
      editButtonSvg.setAttribute('fill', 'none');
      editButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const editButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      editButtonPath.setAttribute('d', 'M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z');
      editButtonPath.setAttribute('fill', '#9873FF');

      editButtonSvg.append(editButtonPath);

      const editButtonText = document.createElement('span');
      editButtonText.className = 'client__edit-text';
      editButtonText.textContent = 'Изменить';

      editButton.append(editButtonSvg, editButtonText);
      editItem.append(editButton);

      const removeItem = document.createElement('li');
      removeItem.className = 'client__remove';

      const removeButton = document.createElement('button');
      removeButton.className = 'btn client__remove-btn';

      const removeButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      removeButtonSvg.setAttribute('width', '16');
      removeButtonSvg.setAttribute('height', '16');
      removeButtonSvg.setAttribute('viewBox', '0 0 16 16');
      removeButtonSvg.setAttribute('fill', 'none');
      removeButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const removeButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      removeButtonPath.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
      removeButtonPath.setAttribute('fill', '#F06A4D');

      removeButtonSvg.append(removeButtonPath);

      const removeButtonText = document.createElement('span');
      removeButtonText.className = 'client__remove-text';
      removeButtonText.textContent = 'Удалить';

      removeButton.append(removeButtonSvg, removeButtonText);
      removeItem.append(removeButton);

      actionsCol.append(editButton, removeButton);

      row.append(idCol, nameCol, createdCol, changedCol, contactsCol, actionsCol);

      return row;

    }

    clients.forEach((client) => {
      table.append(createTableRow(client));
    });

    container.append(title, table);
    section.append(container);
    main.append(section);

    return main;

  }

  document.addEventListener('DOMContentLoaded', () => {

    const formInputs = document.querySelectorAll('.edit-form__input');
    formInputs.forEach((input) => {
      if (input.value === '') {
        input.parentNode.firstElementChild.classList.add('edit-form__label-text--empty');
      }
      input.addEventListener('input', () => {
        if (input.value === '') {
          input.parentNode.firstElementChild.classList.add('edit-form__label-text--empty');
        } else {
          input.parentNode.firstElementChild.classList.remove('edit-form__label-text--empty');
        }
      });
    });

    const contactInputs = document.querySelectorAll('.new-contact__data');
    contactInputs.forEach((input) => {
      if (input.value === '') {
        input.classList.add('new-contact__data--empty');
        input.nextElementSibling.setAttribute('tabIndex', '-1');
      }
      input.addEventListener('input', () => {
        if (input.value === '') {
          input.classList.add('new-contact__data--empty');
          input.nextElementSibling.setAttribute('tabIndex', '-1');
        } else {
          input.classList.remove('new-contact__data--empty');
          input.nextElementSibling.removeAttribute('tabIndex', '-1');
        }
      });
    });

    const clients = [{
      id: '1234567890',
      createdAt: '2021-02-03T13:07:29.554Z',
      updatedAt: '2021-02-03T13:07:29.554Z',
      name: 'Василий',
      surname: 'Пупкин',
      lastName: 'Васильевич',
      contacts: [
        {
          type: 'tel',
          value: '+71234567890'
        },
        {
          type: 'email',
          value: 'abc@xyz.com'
        },
        {
          type: 'fb',
          value: 'https://facebook.com/vasiliy-pupkin-the-best'
        }
      ]
    }];

    document.body.prepend(createCRM(clients));
    document.body.prepend(createHeader());
  });

})();
